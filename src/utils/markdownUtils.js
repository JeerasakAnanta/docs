import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * อ่านไฟล์ markdown และดึงข้อมูล frontmatter และเนื้อหา
 * @param {string} filePath - path ของไฟล์ markdown
 * @returns {object} ข้อมูลจากไฟล์ markdown
 */
export function readMarkdownFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data,
      content: content,
      slug: data.slug || path.basename(filePath, '.md'),
      title: data.title || 'Untitled',
      description: data.description || extractDescription(content),
      date: data.date || getFileDate(filePath),
      type: data.type || 'documentation',
      tags: data.tags || [],
      authors: data.authors || []
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

/**
 * ดึงคำอธิบายจากเนื้อหา (ประโยคแรก)
 * @param {string} content - เนื้อหาของไฟล์
 * @returns {string} คำอธิบาย
 */
function extractDescription(content) {
  // ลบ markdown syntax และดึงประโยคแรก
  const cleanContent = content
    .replace(/^#+\s*/gm, '') // ลบ headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // ลบ bold
    .replace(/\*(.*?)\*/g, '$1') // ลบ italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // ลบ links
    .replace(/`(.*?)`/g, '$1') // ลบ code
    .replace(/<!-- truncate -->/g, '') // ลบ truncate
    .trim();

  // ดึงประโยคแรก
  const firstSentence = cleanContent.split('\n')[0].split('。')[0].split('.')[0];
  return firstSentence.length > 100 ? firstSentence.substring(0, 100) + '...' : firstSentence;
}

/**
 * ดึงวันที่จากชื่อไฟล์หรือ frontmatter
 * @param {string} filePath - path ของไฟล์
 * @returns {string} วันที่
 */
function getFileDate(filePath) {
  const fileName = path.basename(filePath);

  // ลองดึงวันที่จากชื่อไฟล์ (รูปแบบ YYYY-MM-DD)
  const dateMatch = fileName.match(/(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    return dateMatch[1];
  }

  // ถ้าไม่มีวันที่ในชื่อไฟล์ ให้ใช้วันที่แก้ไขไฟล์ล่าสุด
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * อ่านไฟล์ทั้งหมดในโฟลเดอร์
 * @param {string} dirPath - path ของโฟลเดอร์
 * @param {string} type - ประเภทของไฟล์ (docs, blog)
 * @returns {Array} array ของข้อมูลไฟล์
 */
export function readAllMarkdownFiles(dirPath, type = 'docs') {
  try {
    const files = fs.readdirSync(dirPath);
    const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'authors.json');

    const fileData = markdownFiles.map(file => {
      const filePath = path.join(dirPath, file);
      const data = readMarkdownFile(filePath);

      if (data) {
        return {
          ...data,
          type: type === 'blog' ? 'บล็อก' : 'เอกสาร',
          url: type === 'blog' ? `/blog/${data.slug}` : `/docs/${data.slug}`,
          icon: type === 'blog' ? '📝' : '📚'
        };
      }
      return null;
    }).filter(Boolean);

    return fileData;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

/**
 * ดึงข้อมูลอัปเดตล่าสุด
 * @param {number} limit - จำนวนรายการที่ต้องการ
 * @returns {Array} array ของข้อมูลอัปเดตล่าสุด
 */
export function getLatestUpdates(limit = 5) {
  const docsPath = path.join(process.cwd(), 'docs');
  const blogPath = path.join(process.cwd(), 'blog');

  let allUpdates = [];

  // อ่านไฟล์เอกสาร
  if (fs.existsSync(docsPath)) {
    const docsData = readAllMarkdownFiles(docsPath, 'docs');
    allUpdates = allUpdates.concat(docsData);
  }

  // อ่านไฟล์บล็อก
  if (fs.existsSync(blogPath)) {
    const blogData = readAllMarkdownFiles(blogPath, 'blog');
    allUpdates = allUpdates.concat(blogData);
  }

  // เรียงลำดับตามวันที่ (ใหม่สุดก่อน)
  allUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));

  return allUpdates.slice(0, limit);
}

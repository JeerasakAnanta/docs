const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * อ่านไฟล์ markdown และดึงข้อมูล frontmatter และเนื้อหา
 */
function readMarkdownFile(filePath) {
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
 */
function extractDescription(content) {
  const cleanContent = content
    .replace(/^#+\s*/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/<!-- truncate -->/g, '')
    .trim();
  
  const firstSentence = cleanContent.split('\n')[0].split('。')[0].split('.')[0];
  return firstSentence.length > 100 ? firstSentence.substring(0, 100) + '...' : firstSentence;
}

/**
 * ดึงวันที่จากชื่อไฟล์หรือ frontmatter
 */
function getFileDate(filePath) {
  const fileName = path.basename(filePath);
  
  const dateMatch = fileName.match(/(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    return dateMatch[1];
  }
  
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * อ่านไฟล์ทั้งหมดในโฟลเดอร์
 */
function readAllMarkdownFiles(dirPath, type = 'docs') {
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }
    
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
 * สร้างข้อมูลอัปเดตล่าสุด
 */
function generateLatestUpdates() {
  const docsPath = path.join(process.cwd(), 'docs');
  const blogPath = path.join(process.cwd(), 'blog');
  
  let allUpdates = [];
  
  // อ่านไฟล์เอกสาร
  const docsData = readAllMarkdownFiles(docsPath, 'docs');
  allUpdates = allUpdates.concat(docsData);
  
  // อ่านไฟล์บล็อก
  const blogData = readAllMarkdownFiles(blogPath, 'blog');
  allUpdates = allUpdates.concat(blogData);
  
  // เรียงลำดับตามวันที่ (ใหม่สุดก่อน)
  allUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return allUpdates;
}

// สร้างข้อมูลและบันทึกลงไฟล์
const latestUpdates = generateLatestUpdates();
const outputPath = path.join(process.cwd(), 'src/data/latestUpdates.json');

// สร้างโฟลเดอร์ถ้าไม่มี
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// บันทึกข้อมูล
fs.writeFileSync(outputPath, JSON.stringify(latestUpdates, null, 2));

console.log(`✅ Generated ${latestUpdates.length} latest updates`);
console.log(`📁 Saved to: ${outputPath}`);

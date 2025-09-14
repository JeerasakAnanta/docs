const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// ฟังก์ชันสำหรับรัน script สร้างข้อมูล
function generateData() {
  console.log('🔄 Detecting changes in docs/ or blog/...');
  exec('node scripts/generateLatestUpdates.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error}`);
      return;
    }
    console.log(stdout);
  });
}

// ฟังก์ชันสำหรับ watch ไฟล์
function watchFiles() {
  const docsPath = path.join(process.cwd(), 'docs');
  const blogPath = path.join(process.cwd(), 'blog');
  
  console.log('👀 Watching for changes in docs/ and blog/ folders...');
  
  // Watch docs folder
  if (fs.existsSync(docsPath)) {
    fs.watch(docsPath, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.md')) {
        console.log(`📝 ${eventType}: ${filename} in docs/`);
        generateData();
      }
    });
  }
  
  // Watch blog folder
  if (fs.existsSync(blogPath)) {
    fs.watch(blogPath, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.md')) {
        console.log(`📝 ${eventType}: ${filename} in blog/`);
        generateData();
      }
    });
  }
  
  console.log('✅ File watcher started successfully!');
  console.log('💡 Tip: Add or modify .md files in docs/ or blog/ to see auto-updates');
}

// รันครั้งแรก
generateData();

// เริ่ม watch
watchFiles();

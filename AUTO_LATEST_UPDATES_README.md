# 📰 Auto Latest Updates System

ระบบแสดง "เอกสารอัปเดตล่าสุด" ที่ทำงานอัตโนมัติ โดยสแกนไฟล์เอกสารและบล็อกจริงๆ และอัปเดตข้อมูลเมื่อมีการเปลี่ยนแปลง

## ✨ คุณสมบัติ

- 🔄 **อัปเดตอัตโนมัติ** - สแกนไฟล์ docs/ และ blog/ อัตโนมัติ
- 📊 **ข้อมูลจริง** - ดึงข้อมูลจากไฟล์ markdown จริง
- 📅 **เรียงลำดับตามวันที่** - แสดงรายการใหม่สุดก่อน
- 🏷️ **แสดง Tags** - แสดงแท็กจาก frontmatter
- 📱 **Responsive Design** - รองรับทุกขนาดหน้าจอ
- 🌙 **Dark Mode Support** - รองรับธีมมืดและสว่าง
- 👀 **File Watching** - ตรวจจับการเปลี่ยนแปลงไฟล์ในโหมด development

## 🚀 การใช้งาน

### 1. การรันเว็บไซต์ปกติ

```bash
npm start
```

### 2. การรันเว็บไซต์พร้อม File Watching

```bash
npm run start:watch
```

### 3. การสร้างข้อมูลใหม่

```bash
npm run generate-data
```

### 4. การ Watch ไฟล์แยกต่างหาก

```bash
npm run watch-data
```

## 📁 โครงสร้างไฟล์

```
scripts/
├── generateLatestUpdates.js    # Script สร้างข้อมูลจากไฟล์ markdown
└── watchLatestUpdates.js       # Script ตรวจจับการเปลี่ยนแปลงไฟล์

src/
├── data/
│   └── latestUpdates.json      # ข้อมูลที่สร้างขึ้นอัตโนมัติ
└── components/LatestUpdates/
    ├── index.js                # React component หลัก
    ├── styles.module.css       # CSS styles
    └── README.md              # เอกสารนี้
```

## 📝 การเพิ่มเอกสารใหม่

### สำหรับเอกสาร (docs/)

สร้างไฟล์ `.md` ในโฟลเดอร์ `docs/`:

```markdown
---
title: ชื่อเอกสาร
description: คำอธิบายสั้นๆ
tags: [tag1, tag2, tag3]
date: 2024-01-20
---

# ชื่อเอกสาร

เนื้อหาของเอกสาร...
```

### สำหรับบล็อก (blog/)

สร้างไฟล์ `.md` ในโฟลเดอร์ `blog/`:

```markdown
---
slug: my-blog-post
title: ชื่อบล็อก
authors:
  - name: jeerasak
    title: ผู้เขียน
tags: [blog, tips, tutorial]
date: 2024-01-20
---

# ชื่อบล็อก

เนื้อหาของบล็อก...

<!-- truncate -->
```

## 🔧 การทำงานของระบบ

### 1. การสร้างข้อมูล (Build Time)

เมื่อรัน `npm start` หรือ `npm run build`:

1. รัน `scripts/generateLatestUpdates.js`
2. สแกนไฟล์ `.md` ในโฟลเดอร์ `docs/` และ `blog/`
3. อ่าน frontmatter และเนื้อหาของแต่ละไฟล์
4. สร้างข้อมูล JSON และบันทึกลง `src/data/latestUpdates.json`
5. React component อ่านข้อมูลจาก JSON file

### 2. การ Watch ไฟล์ (Development)

เมื่อรัน `npm run start:watch`:

1. รัน file watcher พร้อมกับ development server
2. ตรวจจับการเปลี่ยนแปลงไฟล์ `.md` ใน `docs/` และ `blog/`
3. รัน script สร้างข้อมูลใหม่เมื่อมีการเปลี่ยนแปลง
4. เว็บไซต์จะแสดงข้อมูลใหม่โดยอัตโนมัติ

## 📊 ข้อมูลที่แสดง

แต่ละรายการจะแสดง:

- **ไอคอน** - 📚 สำหรับเอกสาร, 📝 สำหรับบล็อก
- **ชื่อเรื่อง** - จาก frontmatter `title`
- **คำอธิบาย** - จาก frontmatter `description` หรือดึงจากเนื้อหา
- **ประเภท** - "เอกสาร" หรือ "บล็อก"
- **วันที่** - จาก frontmatter `date` หรือวันที่แก้ไขไฟล์
- **แท็ก** - จาก frontmatter `tags` (แสดงสูงสุด 3 แท็ก)
- **ลิงก์** - ลิงก์ไปยังหน้าเอกสารหรือบล็อก

## 🎨 การปรับแต่งสไตล์

แก้ไขไฟล์ `src/components/LatestUpdates/styles.module.css`:

```css
.latestUpdates {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
}

.tag {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
}
```

## 🔧 การแก้ไขปัญหา

### ปัญหา: ไม่แสดงข้อมูล

**สาเหตุ**: ไม่มีไฟล์ markdown หรือ frontmatter ไม่ถูกต้อง

**วิธีแก้**:
1. ตรวจสอบว่ามีไฟล์ `.md` ในโฟลเดอร์ `docs/` และ `blog/`
2. ตรวจสอบ frontmatter ของไฟล์ markdown
3. รัน `npm run generate-data` เพื่อสร้างข้อมูลใหม่

### ปัญหา: ข้อมูลไม่อัปเดต

**สาเหตุ**: File watcher ไม่ทำงาน

**วิธีแก้**:
1. ใช้ `npm run start:watch` แทน `npm start`
2. ตรวจสอบว่าไฟล์ `.md` ถูกบันทึกแล้ว
3. รัน `npm run generate-data` ด้วยตนเอง

### ปัญหา: วันที่ไม่ถูกต้อง

**สาเหตุ**: ไม่มี `date` ใน frontmatter

**วิธีแก้**:
1. เพิ่ม `date: YYYY-MM-DD` ใน frontmatter
2. หรือระบบจะใช้วันที่แก้ไขไฟล์ล่าสุด

## 📈 การพัฒนาต่อ

### ฟีเจอร์ที่สามารถเพิ่มได้:

- **การกรองข้อมูล** - กรองตามประเภท, แท็ก, หรือวันที่
- **การค้นหา** - ค้นหาในรายการ Latest Updates
- **Pagination** - แบ่งหน้าข้อมูล
- **การแคช** - เก็บข้อมูลใน localStorage
- **API Integration** - ดึงข้อมูลจาก API แทนการสร้างไฟล์ JSON
- **การแจ้งเตือน** - แจ้งเตือนเมื่อมีเอกสารใหม่

### การปรับปรุงประสิทธิภาพ:

- **Lazy Loading** - โหลดข้อมูลเมื่อต้องการ
- **Virtual Scrolling** - สำหรับรายการจำนวนมาก
- **Image Optimization** - ปรับปรุงการแสดงรูปภาพ
- **Incremental Updates** - อัปเดตเฉพาะส่วนที่เปลี่ยนแปลง

## 📞 การสนับสนุน

หากมีปัญหาหรือข้อสงสัย:

1. ตรวจสอบ console ใน browser
2. ดู error messages ใน terminal
3. ตรวจสอบการตั้งค่าในไฟล์ config
4. อ่านเอกสาร Docusaurus

## 🎯 ตัวอย่างการใช้งาน

### การเพิ่มเอกสารใหม่

1. สร้างไฟล์ `docs/new-guide.md`
2. เพิ่ม frontmatter ที่จำเป็น
3. เขียนเนื้อหา
4. ข้อมูลจะแสดงในส่วน Latest Updates อัตโนมัติ

### การเพิ่มบล็อกใหม่

1. สร้างไฟล์ `blog/YYYY-MM-DD-title.md`
2. เพิ่ม frontmatter ที่จำเป็น
3. เขียนเนื้อหา
4. ข้อมูลจะแสดงในส่วน Latest Updates อัตโนมัติ

### การแก้ไขข้อมูล

1. แก้ไข frontmatter ของไฟล์ `.md`
2. บันทึกไฟล์
3. ข้อมูลจะอัปเดตอัตโนมัติ (ถ้าใช้ file watcher)

---

**สร้างโดย**: Jeerasak  
**วันที่อัปเดต**: 2024-01-20  
**เวอร์ชัน**: 2.0.0 (Auto Update System)

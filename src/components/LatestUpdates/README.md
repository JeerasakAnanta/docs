# 📰 Latest Updates Component

ส่วน "เอกสารอัปเดตล่าสุด" ที่แสดงข้อมูลจริงจากไฟล์เอกสารและบล็อกในเว็บไซต์

## ✨ คุณสมบัติ

- 📚 **แสดงข้อมูลจริง** - ดึงข้อมูลจากไฟล์ markdown จริง
- 📅 **เรียงลำดับตามวันที่** - แสดงรายการใหม่สุดก่อน
- 🔄 **Loading State** - แสดงสถานะการโหลดข้อมูล
- 📱 **Responsive Design** - รองรับทุกขนาดหน้าจอ
- 🌙 **Dark Mode Support** - รองรับธีมมืดและสว่าง

## 📁 โครงสร้างไฟล์

```
src/components/LatestUpdates/
├── index.js              # React component หลัก
├── styles.module.css     # CSS styles
└── README.md            # เอกสารนี้

src/utils/
└── markdownUtils.js     # Utility functions สำหรับอ่าน markdown
```

## 🚀 การใช้งาน

### 1. การเพิ่มเอกสารใหม่

สร้างไฟล์ markdown ในโฟลเดอร์ `docs/`:

```markdown
---
title: ชื่อเอกสาร
description: คำอธิบายสั้นๆ
tags: [tag1, tag2]
date: 2024-01-20
---

# ชื่อเอกสาร

เนื้อหาของเอกสาร...
```

### 2. การเพิ่มบล็อกใหม่

สร้างไฟล์ markdown ในโฟลเดอร์ `blog/`:

```markdown
---
slug: my-blog-post
title: ชื่อบล็อก
authors:
  - name: jeerasak
    title: ผู้เขียน
tags: [blog, tips]
date: 2024-01-20
---

# ชื่อบล็อก

เนื้อหาของบล็อก...

<!-- truncate -->
```

### 3. การปรับแต่งข้อมูล

แก้ไขไฟล์ `src/components/LatestUpdates/index.js`:

```javascript
const realUpdates = [
  {
    title: 'ชื่อเอกสาร',
    description: 'คำอธิบาย',
    url: '/docs/slug',
    date: '2024-01-20',
    type: 'เอกสาร',
    icon: '📚',
  },
  // เพิ่มรายการอื่นๆ...
];
```

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
```

## 📊 ข้อมูลที่แสดง

แต่ละรายการจะแสดง:

- **ไอคอน** - แสดงประเภทของเนื้อหา (📚 สำหรับเอกสาร, 📝 สำหรับบล็อก)
- **ชื่อเรื่อง** - ชื่อของเอกสารหรือบล็อก
- **คำอธิบาย** - คำอธิบายสั้นๆ ของเนื้อหา
- **ประเภท** - เอกสาร หรือ บล็อก
- **วันที่** - วันที่สร้างหรือแก้ไขล่าสุด
- **ลิงก์** - ลิงก์ไปยังหน้าเอกสารหรือบล็อก

## 🔧 การแก้ไขปัญหา

### ปัญหา: ไม่แสดงข้อมูล

**สาเหตุ**: ไม่มีไฟล์ markdown ในโฟลเดอร์ docs/ หรือ blog/

**วิธีแก้**: 
1. ตรวจสอบว่ามีไฟล์ .md ในโฟลเดอร์ docs/ และ blog/
2. ตรวจสอบ frontmatter ของไฟล์ markdown
3. ตรวจสอบการตั้งค่า URL ใน component

### ปัญหา: ข้อมูลไม่เรียงลำดับถูกต้อง

**สาเหตุ**: วันที่ใน frontmatter ไม่ถูกต้อง

**วิธีแก้**:
1. ตรวจสอบรูปแบบวันที่ใน frontmatter (YYYY-MM-DD)
2. ตรวจสอบการเรียงลำดับในโค้ด

### ปัญหา: สไตล์ไม่แสดง

**สาเหตุ**: CSS module ไม่ถูกโหลด

**วิธีแก้**:
1. ตรวจสอบการ import styles
2. ตรวจสอบชื่อ class ใน CSS
3. ตรวจสอบการตั้งค่า CSS modules

## 📝 ตัวอย่างการใช้งาน

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

## 🎯 การพัฒนาต่อ

### ฟีเจอร์ที่สามารถเพิ่มได้:

- **การกรองข้อมูล** - กรองตามประเภท (เอกสาร/บล็อก)
- **การค้นหา** - ค้นหาในรายการ Latest Updates
- **Pagination** - แบ่งหน้าข้อมูล
- **การแคช** - เก็บข้อมูลใน localStorage
- **API Integration** - ดึงข้อมูลจาก API แทนการ hardcode

### การปรับปรุงประสิทธิภาพ:

- **Lazy Loading** - โหลดข้อมูลเมื่อต้องการ
- **Virtual Scrolling** - สำหรับรายการจำนวนมาก
- **Image Optimization** - ปรับปรุงการแสดงรูปภาพ

## 📞 การสนับสนุน

หากมีปัญหาหรือข้อสงสัย สามารถ:

1. ตรวจสอบ console ใน browser
2. ดู error messages ใน terminal
3. ตรวจสอบการตั้งค่าในไฟล์ config
4. อ่านเอกสาร Docusaurus

---

**สร้างโดย**: Jeerasak  
**วันที่อัปเดต**: 2024-01-20  
**เวอร์ชัน**: 1.0.0

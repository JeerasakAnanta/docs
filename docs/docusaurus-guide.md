---
title: คู่มือการใช้งาน Docusaurus
description: คู่มือฉบับสมบูรณ์สำหรับการใช้งาน Docusaurus ในการสร้างเว็บไซต์เอกสาร
tags: [docusaurus, documentation, guide, tutorial]
date: 2024-01-20
---

# คู่มือการใช้งาน Docusaurus

Docusaurus เป็นเครื่องมือที่ยอดเยี่ยมสำหรับการสร้างเว็บไซต์เอกสารและบล็อก

## คุณสมบัติหลัก

- **การจัดการเอกสาร** - จัดการเอกสารได้อย่างง่ายดาย
- **ระบบบล็อก** - เขียนบล็อกได้ด้วย Markdown
- **การค้นหา** - ค้นหาเนื้อหาได้อย่างรวดเร็ว
- **ธีมมืด** - รองรับธีมมืดและสว่าง
- **Responsive** - ใช้งานได้บนทุกอุปกรณ์

## การติดตั้ง

```bash
npm install -g @docusaurus/init
npx create-docusaurus@latest my-website classic
```

## การใช้งาน

1. สร้างไฟล์เอกสารในโฟลเดอร์ `docs/`
2. เขียนบล็อกในโฟลเดอร์ `blog/`
3. รันคำสั่ง `npm start` เพื่อดูผลลัพธ์

## ตัวอย่างโค้ด

```javascript
// ตัวอย่างการใช้งาน React component
import React from 'react';

function MyComponent() {
  return <div>Hello Docusaurus!</div>;
}

export default MyComponent;
```

## ข้อมูลเพิ่มเติม

:::info หมายเหตุ
Docusaurus รองรับการปรับแต่งได้หลากหลายรูปแบบ
:::

:::tip เคล็ดลับ
ใช้ Markdown เพื่อเขียนเอกสารได้อย่างง่ายดาย
:::

:::warning คำเตือน
อย่าลืม backup ข้อมูลก่อนการอัปเดต
:::

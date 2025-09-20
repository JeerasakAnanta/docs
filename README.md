# Docusaurus Documentation Site

เว็บไซต์เอกสารที่สร้างด้วย Docusaurus พร้อมตัวอย่างการใช้งาน

## คุณสมบัติ

- **หลายภาษา** - รองรับภาษาไทยและอังกฤษ
- **Markdown** - เขียนเอกสารด้วย Markdown
- **ธีมสวยงาม** - ออกแบบมาสำหรับเอกสาร
- **การค้นหา** - ค้นหาข้อมูลได้อย่างรวดเร็ว
- **Responsive** - ใช้งานได้ทุกอุปกรณ์

## การติดตั้ง

### ข้อกำหนดเบื้องต้น

- Node.js 20 ขึ้นไป 
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```

2. **เริ่มต้นเซิร์ฟเวอร์พัฒนา**
   ```bash
   npm start
   ```

3. **เปิดเบราว์เซอร์**
   ```
   http://localhost:3000
   ```

## คำสั่งที่มีประโยชน์

```bash
# เริ่มต้นเซิร์ฟเวอร์พัฒนา
npm start

# สร้างเวอร์ชัน production
npm run build

# รันเวอร์ชัน production
npm run serve

# ล้าง cache
npm run clear
```

## โครงสร้างโปรเจกต์

```
docs/
├── docs/                    # เอกสารหลัก
│   ├── intro.md            # หน้าบทนำ
│   ├── tutorial-basics/     # บทเรียนพื้นฐาน
│   ├── tutorial-extras/     # บทเรียนเพิ่มเติม
│   └── examples/           # ตัวอย่างการใช้งาน
├── blog/                   # บล็อก
├── src/                    # ซอร์สโค้ด
│   ├── components/         # React components
│   ├── css/               # CSS styles
│   └── pages/             # หน้าเว็บเพิ่มเติม
├── static/                # ไฟล์สถิตย์
├── docusaurus.config.js   # การตั้งค่าหลัก
└── package.json           # Dependencies
```

## การปรับแต่ง

### เปลี่ยนชื่อเว็บไซต์

แก้ไขไฟล์ `docusaurus.config.js`:

```javascript
const config = {
  title: 'ชื่อเว็บไซต์ของคุณ',
  tagline: 'คำอธิบายเว็บไซต์',
  // ...
};
```

### เพิ่มหน้าใหม่

1. สร้างไฟล์ Markdown ในโฟลเดอร์ `docs/`
2. เพิ่มใน `sidebars.js`:

```javascript
const sidebars = {
  tutorialSidebar: [
    'intro',
    'your-new-page', // เพิ่มบรรทัดนี้
  ],
};
```

### ปรับแต่งธีม

แก้ไขไฟล์ `src/css/custom.css` เพื่อเปลี่ยนสีและสไตล์

## ตัวอย่างการใช้งาน

### Code Blocks

```javascript
function hello() {
  console.log("สวัสดี Docusaurus!");
}
```

### Tables

| คุณสมบัติ | สถานะ |
|-----------|--------|
| การค้นหา | ✅ |
| หลายภาษา | ✅ |

### Admonitions

:::tip เคล็ดลับ
นี่คือเคล็ดลับที่มีประโยชน์
:::

## การ Deploy

### GitHub Pages

1. ตั้งค่า GitHub Actions
2. Push โค้ดไปยัง repository
3. GitHub จะ build และ deploy อัตโนมัติ

### Netlify

1. เชื่อมต่อ repository กับ Netlify
2. ตั้งค่า build command: `npm run build`
3. ตั้งค่า publish directory: `build`

## การสนับสนุน

หากมีปัญหาหรือคำถาม:

- **อ่าน** [Docusaurus Documentation](https://docusaurus.io)
- **เข้าร่วม** [Discord Community](https://discord.gg/docusaurus)
- **รายงานปัญหา** ใน [GitHub Issues](https://github.com/facebook/docusaurus/issues)

## License

MIT License - ดูรายละเอียดในไฟล์ LICENSE
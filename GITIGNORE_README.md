# 📁 .gitignore สำหรับ Docusaurus Project

ไฟล์ `.gitignore` นี้ถูกออกแบบมาเพื่อ Docusaurus project พร้อมระบบ Auto Latest Updates

## 🚫 ไฟล์ที่ถูก Ignore

### Docusaurus Build Outputs
- `/build` - ไฟล์ที่ build แล้ว
- `/.docusaurus` - ไฟล์ cache ของ Docusaurus

### Generated Files
- `/src/data/latestUpdates.json` - ข้อมูลที่สร้างขึ้นอัตโนมัติจากระบบ Latest Updates

### Dependencies
- `/node_modules` - packages ที่ติดตั้ง

### Environment Files
- `.env*` - ไฟล์ environment variables
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

### Logs
- `npm-debug.log*`
- `yarn-debug.log*`
- `yarn-error.log*`
- `lerna-debug.log*`

### Cache Files
- `.cache`
- `.parcel-cache`
- `.eslintcache`
- `.prettiercache`
- `.stylelintcache`
- `*.tsbuildinfo`

### Editor Files
- `.vscode/`
- `.idea/`
- `*.swp`
- `*.swo`
- `*~`

### OS Files
- `.DS_Store` (macOS)
- `Thumbs.db` (Windows)
- `Desktop.ini` (Windows)

### Deployment Platforms
- `.vercel`
- `.netlify`
- `.github/`

### Lock Files
- `yarn.lock`
- `pnpm-lock.yaml`
- (เก็บ `package-lock.json` ไว้)

### Backup Files
- `*.bak`
- `*.backup`
- `*.old`

## ✅ ไฟล์ที่ควร Commit

### Source Code
- `src/` (ยกเว้น `src/data/latestUpdates.json`)
- `docs/`
- `blog/`
- `static/`

### Configuration Files
- `docusaurus.config.js`
- `package.json`
- `package-lock.json`
- `sidebars.js`
- `scripts/`

### Documentation
- `README.md`
- `AUTO_LATEST_UPDATES_README.md`

## 🔧 การใช้งาน

### ตรวจสอบไฟล์ที่ถูก Ignore
```bash
git check-ignore <filename>
```

### ดูไฟล์ที่ถูก Ignore ทั้งหมด
```bash
git status --ignored
```

### เพิ่มไฟล์ที่ถูก Ignore แล้ว
```bash
git add -f <filename>
```

### ลบไฟล์ที่ถูก Track ออก
```bash
git rm --cached <filename>
```

## 📝 หมายเหตุสำคัญ

### ไฟล์ `src/data/latestUpdates.json`
- ไฟล์นี้ถูกสร้างขึ้นอัตโนมัติโดย `scripts/generateLatestUpdates.js`
- ไม่ควร commit เพราะจะถูกสร้างใหม่ทุกครั้งที่ build
- หากต้องการ commit ให้ลบออกจาก `.gitignore` และ commit ด้วย `git add -f`

### ไฟล์ `node_modules`
- ไม่ควร commit เพราะมีขนาดใหญ่และสามารถสร้างใหม่ได้จาก `package.json`
- ใช้ `npm install` เพื่อสร้างใหม่

### ไฟล์ Build
- `/build` และ `/.docusaurus` ไม่ควร commit
- ใช้ `npm run build` เพื่อสร้างใหม่

## 🚀 การ Deploy

### GitHub Pages
- ไฟล์ build จะถูกสร้างใน GitHub Actions
- ไม่ต้อง commit ไฟล์ build

### Netlify
- ไฟล์ build จะถูกสร้างใน Netlify
- ไม่ต้อง commit ไฟล์ build

### Vercel
- ไฟล์ build จะถูกสร้างใน Vercel
- ไม่ต้อง commit ไฟล์ build

## 🔍 การแก้ไขปัญหา

### ปัญหา: ไฟล์ที่ควรถูก ignore ยังแสดงใน git status

**วิธีแก้**:
1. ตรวจสอบว่าไฟล์อยู่ใน `.gitignore`
2. ลบไฟล์ออกจาก git cache: `git rm --cached <filename>`
3. Commit การเปลี่ยนแปลง

### ปัญหา: ไฟล์ที่ควรถูก track ถูก ignore

**วิธีแก้**:
1. เพิ่มไฟล์ด้วย `git add -f <filename>`
2. หรือแก้ไข `.gitignore` เพื่อยกเว้นไฟล์นั้น

### ปัญหา: ไฟล์ `latestUpdates.json` ไม่ถูก ignore

**วิธีแก้**:
1. ตรวจสอบว่า `/src/data/latestUpdates.json` อยู่ใน `.gitignore`
2. ลบไฟล์ออกจาก git cache: `git rm --cached src/data/latestUpdates.json`
3. Commit การเปลี่ยนแปลง

## 📚 ข้อมูลเพิ่มเติม

- [Git Ignore Documentation](https://git-scm.com/docs/gitignore)
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Node.js .gitignore Template](https://github.com/github/gitignore/blob/main/Node.gitignore)

---

**สร้างโดย**: Jeerasak  
**วันที่อัปเดต**: 2024-01-20  
**เวอร์ชัน**: 1.0.0

import React from 'react';
import Layout from '@theme/Layout';
import styles from './sitemap-styles.module.css';

export default function Sitemap() {
  const sitemapData = [
    {
      title: 'หน้าแรก',
      url: '/',
      description: 'หน้าแรกของเว็บไซต์',
      priority: '1.0',
      changefreq: 'daily',
    },
    {
      title: 'เอกสาร',
      url: '/docs/intro',
      description: 'หน้าเอกสารหลัก',
      priority: '0.9',
      changefreq: 'weekly',
      children: [
        {
          title: 'การแนะนำ',
          url: '/docs/intro',
          description: 'แนะนำการใช้งาน Docusaurus',
        },
        {
          title: 'สร้างเอกสารใหม่',
          url: '/docs/tutorial-basics/create-a-document',
          description: 'เรียนรู้วิธีการสร้างเอกสารใหม่',
        },
        {
          title: 'การจัดการเวอร์ชันเอกสาร',
          url: '/docs/tutorial-extras/manage-docs-versions',
          description: 'การจัดการเวอร์ชันต่างๆ ของเอกสาร',
        },
        {
          title: 'การตั้งค่าการค้นหา',
          url: '/docs/tutorial-extras/search-setup',
          description: 'การตั้งค่าและใช้งานระบบค้นหา',
        },
        {
          title: 'การจัดการเอกสารอัปเดตล่าสุด',
          url: '/docs/tutorial-extras/latest-updates-management',
          description: 'การจัดการส่วนเอกสารอัปเดตล่าสุด',
        },
        {
          title: 'ตัวอย่างการใช้งาน',
          url: '/docs/examples/introduction',
          description: 'ตัวอย่างการใช้งานฟีเจอร์ต่างๆ',
        },
      ],
    },
    {
      title: 'บล็อก',
      url: '/blog',
      description: 'บทความและข่าวสาร',
      priority: '0.8',
      changefreq: 'weekly',
      children: [
        {
          title: 'สวัสดี Docusaurus',
          url: '/blog/welcome-th',
          description: 'ยินดีต้อนรับสู่บล็อกของฉัน',
        },
        {
          title: 'Welcome to Docusaurus',
          url: '/blog/welcome-en',
          description: 'Welcome to my blog',
        },
      ],
    },
  ];

  return (
    <Layout
      title="Sitemap"
      description="แผนผังเว็บไซต์ - ดูโครงสร้างและลิงก์ทั้งหมดของเว็บไซต์">
      <div className={styles.sitemapPage}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.header}>
                <h1 className={styles.title}>🗺️ Sitemap</h1>
                <p className={styles.subtitle}>
                  แผนผังเว็บไซต์ - ดูโครงสร้างและลิงก์ทั้งหมดของเว็บไซต์
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col--12">
              <div className={styles.sitemapContent}>
                {sitemapData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className={styles.section}>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.sectionTitle}>
                        <a href={section.url} className={styles.sectionLink}>
                          {section.title}
                        </a>
                      </h2>
                      <p className={styles.sectionDescription}>
                        {section.description}
                      </p>
                      <div className={styles.sectionMeta}>
                        <span className={styles.priority}>
                          Priority: {section.priority}
                        </span>
                        <span className={styles.changefreq}>
                          Update: {section.changefreq}
                        </span>
                      </div>
                    </div>

                    {section.children && (
                      <div className={styles.children}>
                        <h3 className={styles.childrenTitle}>หน้าภายใน:</h3>
                        <ul className={styles.childrenList}>
                          {section.children.map((child, childIndex) => (
                            <li key={childIndex} className={styles.childItem}>
                              <a href={child.url} className={styles.childLink}>
                                {child.title}
                              </a>
                              <p className={styles.childDescription}>
                                {child.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col--12">
              <div className={styles.xmlSitemap}>
                <h3 className={styles.xmlTitle}>XML Sitemap</h3>
                <p className={styles.xmlDescription}>
                  สำหรับ Search Engines และเครื่องมือ SEO
                </p>
                <a 
                  href="/sitemap.xml" 
                  className="button button--primary button--lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 ดู XML Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

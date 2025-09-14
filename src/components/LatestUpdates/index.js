import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Import auto-generated data
import latestUpdatesData from '../../data/latestUpdates.json';

export default function LatestUpdates() {
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ใช้ข้อมูลจากไฟล์ JSON ที่สร้างขึ้นอัตโนมัติ
    const updates = latestUpdatesData.map(update => ({
      title: update.title === 'Untitled' ? 'Jeerasak Docs 👋' : update.title,
      description: update.description,
      url: update.url,
      date: update.date,
      type: update.type,
      icon: update.icon,
      tags: update.tags,
      authors: update.authors
    }));

    // เรียงลำดับตามวันที่ (ใหม่สุดก่อน)
    const sortedUpdates = updates.sort((a, b) => new Date(b.date) - new Date(a.date));

    // จำลองการโหลดข้อมูล
    setTimeout(() => {
      setLatestUpdates(sortedUpdates);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <section className={styles.latestUpdates}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.header}>
                <h2 className={styles.title}>
                  📰 เอกสารอัปเดตล่าสุด
                </h2>
                <p className={styles.subtitle}>
                  กำลังโหลดข้อมูล...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.latestUpdates}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className={styles.header}>
              <h2 className={styles.title}>
                📰 เอกสารอัปเดตล่าสุด
              </h2>
              <p className={styles.subtitle}>
                เอกสารและบทความล่าสุด {latestUpdates.length} รายการ
              </p>
            </div>
          </div>
        </div>
        <div className={styles.updatesList}>
          {latestUpdates.length > 0 ? (
            latestUpdates.map((update, idx) => (
              <div key={idx} className={styles.updateItem}>
                <div className={styles.itemIcon}>{update.icon}</div>
                <div className={styles.itemContent}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>
                      <a href={update.url} className={styles.itemLink}>
                        {update.title}
                      </a>
                    </h3>
                    <span className={styles.itemType}>{update.type}</span>
                  </div>
                  <p className={styles.itemDescription}>
                    {update.description}
                  </p>
                  <div className={styles.itemFooter}>
                    <span className={styles.itemDate}>
                      📅 {update.date}
                    </span>
                    {update.tags && update.tags.length > 0 && (
                      <div className={styles.itemTags}>
                        {update.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span key={tagIdx} className={styles.tag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.updateItem}>
              <div className={styles.itemIcon}>📄</div>
              <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>
                    <span className={styles.itemLink}>
                      ไม่มีเอกสารหรือบล็อก
                    </span>
                  </h3>
                  <span className={styles.itemType}>ข้อมูล</span>
                </div>
                <p className={styles.itemDescription}>
                  ยังไม่มีเอกสารหรือบล็อกในระบบ กรุณาเพิ่มเนื้อหาในโฟลเดอร์ docs/ หรือ blog/
                </p>
                <div className={styles.itemFooter}>
                  <span className={styles.itemDate}>
                    📅 {new Date().toISOString().split('T')[0]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col col--12">
            <div className={styles.viewAll}>
              <a href="/docs/intro" className="button button--primary button--lg">
                ดูเอกสารทั้งหมด
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
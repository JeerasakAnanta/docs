import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'Documentation',
      emoji: '🚀',
      description: (
        <>
          Documentation
        </>
      ),
    },
    {
      title: 'Blog',
      emoji: '📝',
      description: (
        <>
          Blog
        </>
      ),
    },
    {
      title: 'Wiki',
      emoji: '⚛️',
      description: (
        <>
          Wiki
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ emoji, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

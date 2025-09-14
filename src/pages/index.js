import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LatestUpdates from '@site/src/components/LatestUpdates';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Jeerasak wiki and documentation">
      <HomepageHeader />
            <main>
              <HomepageFeatures />
              <LatestUpdates />
            </main>
    </Layout>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">Jeerasak Docs</h1>
        <p className="hero__subtitle">
        📘 Wiki & 📃Documentation crafted 
          with 💖 by Jeerasak
        </p>

        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/docs/intro">
            Start reading
          </a>
        </div>
      </div>
    </header>
  );
}

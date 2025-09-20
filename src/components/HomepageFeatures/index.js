import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Book, Pencil, Atom } from "lucide-react";

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: "Documentation",
      icon: <Book size={40} />, // Lucide Book icon
      description: <>Documentation</>,
    },
    {
      title: "Blog",
      icon: <Pencil size={40} />, // Lucide Pencil icon
      description: <>Blog</>,
    },
    {
      title: "Wiki",
      icon: <Atom size={40} />, // Lucide Atom icon
      description: <>Wiki</>,
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

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

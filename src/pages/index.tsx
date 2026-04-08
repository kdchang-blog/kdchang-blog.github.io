import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const stats = [
  { number: "5+", label: "獨立開發的產品" },
  { number: "4,000+", label: "GitHub Stars" },
  { number: "100+", label: "文章分享" },
  { number: "5,500+", label: "追蹤者" },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            瀏覽最新文章
          </Link>
          <Link
            className="margin-left--sm button button--success button--lg"
            to="/projects"
          >
            探索產品專案
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsStrip() {
  return (
    <div className="statsStrip">
      <div className="statsInner">
        {stats.map((s) => (
          <div key={s.label} className="statItem">
            <span className="statNumber">{s.number}</span>
            <span className="statLabel">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSection() {
  return (
    <section className="newsletterSection">
      <div className="newsletterCard">
        <span className="newsletterIcon">✉️</span>
        <h2 className="newsletterTitle">訂閱 KD Chang 的電子報</h2>
        <p className="newsletterDesc">
          每週精選產品開發、職涯洞見與科技趨勢，直接送到你的信箱。 加入超過
          1,000 位讀者，一起成為更好的自己。
        </p>
        <iframe
          src="https://kdchangnet.substack.com/embed"
          width="100%"
          height="150"
          className="newsletterEmbed"
          style={{ border: "none", display: "block" }}
          title="訂閱 KD Chang 的電子報"
        />
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <StatsStrip />
      <main>
        <HomepageFeatures />
      </main>
      <NewsletterSection />
    </Layout>
  );
}

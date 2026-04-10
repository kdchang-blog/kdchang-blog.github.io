import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

/* ──────────────────────────────────────────────────────
   Data
────────────────────────────────────────────────────── */
const stats = [
  { number: "5+", label: "獨立開發的產品" },
  { number: "4,000+", label: "GitHub Stars" },
  { number: "100+", label: "文章分享" },
  { number: "5,500+", label: "追蹤者" },
];

type FeaturedProduct = {
  emoji: string;
  image?: string;
  title: string;
  desc: string;
  tags: string[];
  url: string;
};

const featuredProducts: FeaturedProduct[] = [
  {
    emoji: "📚",
    image: "/img/projects/lifepicksbookstore.webp",
    title: "人生推書店 - LifePicks Bookstore",
    desc: "專為在人生路上感到徬徨、迷惘或卡關的你打造的虛擬獨立書店。無論你正探索自我、追求成長，這裡都有一本書在等著你。",
    tags: ["選書電商", "閱讀"],
    url: "https://www.lifepicksbookstore.com/",
  },
  {
    emoji: "🧪",
    image: "/img/projects/careertags.webp",
    title: "CareerTags 職涯書籤",
    desc: "瀏覽器擴充功能，幫助使用者一鍵收藏跨平台職缺和學習資源，系統化管理求職進度及職涯成長。",
    tags: ["Chrome 擴充", "職涯發展"],
    url: "https://www.careertags.com/",
  },
  {
    emoji: "🧪",
    image: "/img/projects/exploretags.webp",
    title: "ExploreTags 漫旅書籤",
    desc: "ExploreTags 是一款城市探索打卡 App，讓你透過任務式打卡挑戰，主動走進城市的每個角落。",
    tags: ["Mobile App", "Travel"],
    url: "https://www.exploretags.com/",
  },
];

type Article = {
  badge: string;
  title: string;
  excerpt: string;
  slug: string;
};

const featuredArticles: Article[] = [
  {
    badge: "閱讀筆記",
    title: "原子習慣：細微改變帶來巨大成就",
    excerpt:
      "每天進步 1%，一年後你將進步 37 倍。透過建立系統而非依賴目標，打造持久的好習慣。",
    slug: "reading-notes-atomic-habits",
  },
  {
    badge: "AI / LLM",
    title: "打造 LLM App 必懂的 10 個關鍵詞",
    excerpt:
      "從 RAG、Fine-tuning 到 Agent 架構，一次掌握構建大語言模型應用不可不知的核心概念。",
    slug: "about-llm-app-10-keywords",
  },
  {
    badge: "職涯發展",
    title: "PM 產品專案經理職涯發展全攻略",
    excerpt:
      "從工程師到 PM 的轉型路徑、必備核心技能、職涯規劃思路，以及如何在職場中持續成長。",
    slug: "product-manager-career-development-notes-01-overview",
  },
  {
    badge: "知識管理",
    title: "打造第二大腦：建構個人知識管理系統",
    excerpt:
      "如何把散落各處的想法、筆記與靈感，系統化整理成可隨時取用、持續累積的知識資產。",
    slug: "reading-notes-building-a-second-brain",
  },
];

const categories = [
  {
    icon: "📖",
    title: "閱讀筆記 / 人生反思",
    desc: "精選職場、心理勵志、商業管理等好書重點摘要與深度解析，幫助你發現人生意義",
  },
  {
    icon: "💼",
    title: "職涯發展 / 個人成長",
    desc: "從職場新鮮人到資深工作者的成長學習軌跡，探討技能提升、領導力與職場軟實力",
  },
  {
    icon: "🎬",
    title: "電影心得 / 旅行遊記",
    desc: "透過電影鏡頭觀察人性，從旅行見聞分享不同文化視角下的人生智慧與成長體悟",
  },
];

const newsletterReasons = [
  {
    title: "閱讀學習精選心得",
    desc: "透過一本好書和好課的核心觀點，分享閱讀學習心得與知識",
  },
  {
    title: "職涯與人生成長反思",
    desc: "分享個人成長、工程思維、領導管理心得與職涯發展建議",
  },
  {
    title: "產品開發與科技洞察",
    desc: "產品開發、AI Agent、Vibe Coding 最新應用與實作分享",
  },
];

/* ──────────────────────────────────────────────────────
   Sub-components
────────────────────────────────────────────────────── */
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

function FeaturedProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionCtaRow}>
          <div>
            <span className={styles.sectionEyebrow}>Products</span>
            <h2 className={styles.sectionHeading}>我打造的產品</h2>
            <p className={styles.sectionSubheading}>
              用 Builder 思維，從零到一打造人們真正需要的產品與服務
            </p>
          </div>
          <Link to="/projects" className={styles.sectionCtaLink}>
            查看所有產品專案 →
          </Link>
        </div>
        <div className={styles.productsGrid}>
          {featuredProducts.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productCard}
              style={{ textDecoration: "none" }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className={styles.productImage}
                />
              ) : (
                <div className={styles.productImagePlaceholder}>{p.emoji}</div>
              )}
              <div className={styles.productBody}>
                <div className={styles.productTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.productTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className={styles.productTitle}>{p.title}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
                <span className={styles.productBtn}>🔗 前往網站</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentCategoriesSection() {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.sectionWrapper}>
        <span className={styles.sectionEyebrow}>Content</span>
        <h2 className={styles.sectionHeading}>內容主題</h2>
        <p className={styles.sectionSubheading}>
          透過閱讀、旅行和電影，一起解答職場與人生中的各種難題，成為更好的自己
        </p>
        <div className={styles.categoriesGrid}>
          {categories.map((c) => (
            <div key={c.title} className={styles.categoryCard}>
              <span className={styles.categoryIcon}>{c.icon}</span>
              <h3 className={styles.categoryTitle}>{c.title}</h3>
              <p className={styles.categoryDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedArticlesSection() {
  return (
    <section className={styles.articlesSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionCtaRow}>
          <div>
            <span className={styles.sectionEyebrow}>Blog</span>
            <h2 className={styles.sectionHeading}>精選文章</h2>
            <p className={styles.sectionSubheading}>
              深度閱讀學習思考、職涯觀點、人生反思與產品開發心得，持續累積總結經驗與成長智慧
            </p>
          </div>
          <Link to="/blog" className={styles.sectionCtaLink}>
            瀏覽所有文章 →
          </Link>
        </div>
        <div className={styles.articlesGrid}>
          {featuredArticles.map((a) => (
            <Link
              key={a.slug}
              to={`/blog/${a.slug}`}
              className={styles.articleCard}
            >
              <span className={styles.articleBadge}>{a.badge}</span>
              <h3 className={styles.articleTitle}>{a.title}</h3>
              <p className={styles.articleExcerpt}>{a.excerpt}</p>
              <span className={styles.articleReadMore}>閱讀全文 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="newsletterSection">
      <div className="newsletterCard">
        <span className="newsletterIcon">✉️</span>
        <h2 className="newsletterTitle">訂閱 KD Chang 的電子報</h2>
        <p className="newsletterDesc">
          加入超過 1,000 位讀者的學習社群，每週一封信讓你成為更好的自己
        </p>
        <div className={styles.nlReasonsGrid}>
          {newsletterReasons.map((r) => (
            <div key={r.title} className={styles.nlReason}>
              <div className={styles.nlReasonText}>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <iframe
          src="https://kdchang.substack.com/embed"
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

/* ──────────────────────────────────────────────────────
   Page
────────────────────────────────────────────────────── */
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <StatsStrip />
      <main>
        <FeaturedProductsSection />
        <ContentCategoriesSection />
        <FeaturedArticlesSection />
      </main>
      <NewsletterSection />
    </Layout>
  );
}

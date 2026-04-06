import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

const experiences = [
  {
    role: "Engineering Team Lead — 車聯網架構組技術主管",
    company: "FOXTRON 鴻華先進",
  },
  {
    role: "Senior Software Engineer — 資深軟體工程師",
    company: "鴻海科技集團 Foxconn",
  },
  {
    role: "Technical Project Manager — 技術專案經理 (TPM)",
    company: "104.com.tw 一零四資訊科技",
  },
  {
    role: "Software Engineer & Product Owner",
    company: "MOXIATEK 墨俠科技",
  },
  {
    role: "Senior Software Engineer & Scrum Master",
    company: "Appier 沛星互動科技",
  },
  {
    role: "Software Engineer — 軟體工程師",
    company: "Delta Electronics 台達電子",
  },
  {
    role: "Intern Software Engineer — 實習工程師",
    company: "Mozilla Firefox 美商謀智",
  },
];

const education = [
  {
    school: "國立臺灣大學",
    degree: "資訊管理學系研究所 碩士",
  },
  {
    school: "國立臺灣大學",
    degree: "經濟學系 學士 | 創意創業學程",
  },
  {
    school: "國立台中第一高級中學 (TCFSH)",
    degree: "高中",
  },
];

const highlights = [
  {
    emoji: "💻",
    text: "Interdisciplinary background in Computer Science and Social Science",
  },
  {
    emoji: "⭐",
    text: "Open source contributor — 4,000+ GitHub stars",
  },
  {
    emoji: "📚",
    text: "Technical writer, educator, and hackathon organizer",
  },
  {
    emoji: "🎓",
    text: "Mentor to 3,000+ students learning to code",
  },
  {
    emoji: "🤖",
    text: "Pepper Robotics App Challenge — First Prize Winner (5-person team lead)",
  },
  {
    emoji: "🌐",
    text: "Experienced in Web, IoT, and AI/Robotics innovative applications",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "LLM / AI",
  "RAG",
  "LangChain",
  "Product Management",
  "Scrum / Agile",
  "Technical Project Management",
  "System Architecture",
  "Team Leadership",
  "Public Speaking",
  "Technical Writing",
];

const contacts = [
  {
    label: "E-Mail",
    value: "kdchang.net@gmail.com",
    href: "mailto:kdchang.net@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/kdchang",
    href: "https://github.com/kdchang",
  },
  { label: "KD Labs", value: "kdchang.net", href: "https://www.kdchang.net" },
  {
    label: "Tech Blog",
    value: "tech.kdchang.net",
    href: "https://tech.kdchang.net",
  },
  {
    label: "Slides",
    value: "slides.com/kd-chang",
    href: "http://slides.com/kd-chang",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kdchang" },
  { label: "Twitter / X", href: "https://twitter.com/kaidichang" },
  {
    label: "SlideShare",
    href: "http://www.slideshare.net/KaiDiChang/",
  },
  { label: "Substack", href: "https://kdchangnet.substack.com/" },
];

export default function About(): ReactNode {
  return (
    <Layout
      title="關於本站 | KD Chang 張凱迪"
      description="KD Chang 張凱迪，軟體工程師、PM 產品經理、教育工作者。CoderBridge 創辦人、TechBridge Weekly 創辦人、《從零開始學 ReactJS》作者。"
    >
      {/* ── Hero / Profile Banner ── */}
      <div className={styles.aboutHero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.profileCard}>
          <img
            src="/img/avatar.jpg"
            alt="KD Chang 張凱迪"
            className={styles.avatar}
          />
          <h1 className={styles.profileName}>KD Chang 張凱迪</h1>
          <p className={styles.profileQuote}>
            踏上人生的英雄旅程，不斷嘗試和進化，成為更好版本的自己
          </p>
          <div className={styles.roleBadges}>
            <span className={`${styles.badge} ${styles.badgeTeal}`}>
              Builder
            </span>
            <span className={`${styles.badge} ${styles.badgeGreen}`}>
              Curator
            </span>
            <span className={`${styles.badge} ${styles.badgeOrange}`}>
              Lifelong Learner
            </span>
          </div>
        </div>
      </div>

      {/* ── Social Links Strip ── */}
      <div className={styles.socialStrip}>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>

      {/* ── Page Body ── */}
      <div className={styles.aboutBody}>
        {/* Bio */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>👤</span>
            <h2 className={styles.sectionTitle}>About</h2>
          </div>
          <hr className={styles.divider} />
          <div className={styles.bioText}>
            <p>
              KD Chang 張凱迪，台灣大學主修經濟學、臺大資管所碩士。是一個{" "}
              <span className={styles.highlight}>軟體工程師</span>，也是一位{" "}
              <span className={styles.highlight}>PM 產品專案經理</span> 和
              <span className={styles.highlight}> 知識策展人</span>。
            </p>
            <p>
              曾服務過上市科技公司、上市網路軟體公司、台灣 AI
              人工智慧新創獨角獸公司和全球前三大瀏覽器製造外商，也曾參與數個新創組織的創辦和嘗試過多個網路產品服務的開發。
            </p>
            <p>
              同時也是{" "}
              <a
                href="https://www.facebook.com/CoderBridgeTW"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoderBridge 開發者技術內容創作分享與職涯發展平台
              </a>{" "}
              創辦人、
              <a
                href="http://weekly.techbridge.cc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechBridge Weekly 技術週刊
              </a>{" "}
              創辦人、React 入門教學書《從零開始學 ReactJS》作者和{" "}
              <a
                href="https://github.com/HackNTU"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackNTU 臺大黑客松
              </a>{" "}
              的創辦人。
            </p>
            <p>
              具備電腦科學與社會科學的跨域背景知識，致力於整合科技與人文，讓這個世界更加開放美好。
            </p>
            <p>
              <em>
                @kdchang 文藝型開發者，站在科技與人文的交叉口。A Software
                Engineer, Product Manager / Project Manager &amp; Curator.
              </em>
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>✨</span>
            <h2 className={styles.sectionTitle}>Highlights</h2>
          </div>
          <hr className={styles.divider} />
          <div className={styles.highlightGrid}>
            {highlights.map((h, i) => (
              <div key={i} className={styles.highlightCard}>
                <span className={styles.highlightEmoji}>{h.emoji}</span>
                <p className={styles.highlightText}>{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>💼</span>
            <h2 className={styles.sectionTitle}>Experience 經歷</h2>
          </div>
          <hr className={styles.divider} />
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <p className={styles.timelineRole}>{exp.role}</p>
                <p className={styles.timelineCompany}>{exp.company}</p>
                <p className={styles.timelinePeriod}>{exp.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🎓</span>
            <h2 className={styles.sectionTitle}>Education 學歷</h2>
          </div>
          <hr className={styles.divider} />
          <div className={styles.eduGrid}>
            {education.map((edu, i) => (
              <div key={i} className={styles.eduCard}>
                <p className={styles.eduSchool}>{edu.school}</p>
                <p className={styles.eduDegree}>{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🛠️</span>
            <h2 className={styles.sectionTitle}>Skills 技能</h2>
          </div>
          <hr className={styles.divider} />
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>📬</span>
            <h2 className={styles.sectionTitle}>Contact 聯絡方式</h2>
          </div>
          <hr className={styles.divider} />
          <ul className={styles.contactList}>
            {contacts.map((c) => (
              <li key={c.label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.label}</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

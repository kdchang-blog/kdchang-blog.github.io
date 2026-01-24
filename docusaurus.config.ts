import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as fs from "fs";
import * as path from "path";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// Function to read blog post date from frontmatter
function getBlogPostDate(slug: string): string | null {
  try {
    const blogPath = path.join(__dirname, "blog", `${slug}.md`);
    if (!fs.existsSync(blogPath)) {
      return null;
    }

    const content = fs.readFileSync(blogPath, "utf-8");
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const dateMatch = frontmatter.match(/date:\s*(.+)/);

      if (dateMatch) {
        return dateMatch[1].trim();
      }
    }

    return null;
  } catch (error) {
    console.log(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Function to format date for Jekyll-style URL
function formatJekyllDate(dateString: string): string | null {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `/${year}/${month}/${day}`;
  } catch (error) {
    return null;
  }
}

const config: Config = {
  title: "KD 閱讀職場人生 🔖",
  tagline:
    "讓我們透過閱讀、旅行和電影，一起解答職場與人生中的各種難題，成為更好的自己📚✨",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.kdchang.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kdchang-tech-blog", // Usually your GitHub org/user name.
  projectName: "kdchang-tech-blog.github.io", // repo

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownImages: () => {
        return;
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-K6D3LZ65", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/resources",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          blogPostComponent: "@theme/BlogPostPage",
          blogListComponent: "@theme/BlogListPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          blogTagsPostsComponent: "@theme/BlogTagsPostsPage",

          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: false,
        // docs route base path
        docsRouteBasePath: "/resources",
        blogRouteBasePath: "/blog",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          const redirects = [];

          if (existingPath.includes("/blog/")) {
            // Extract post slug from blog path
            const blogPostMatch = existingPath.match(/\/blog\/(.+)/);
            if (blogPostMatch) {
              const postSlug = blogPostMatch[1];

              // Read the actual blog post date and create Jekyll-style redirect
              const dateString = getBlogPostDate(postSlug);
              if (dateString) {
                const jekyllDatePath = formatJekyllDate(dateString);
                if (jekyllDatePath) {
                  // Create Jekyll-style redirect: /YYYY/MM/DD/post-slug/
                  redirects.push(`${jekyllDatePath}/${postSlug}/`);
                }
              }
            }

            // Handle direct slug redirects (without /blog prefix)
            const pathWithoutBlog = existingPath.replace("/blog/", "/");
            redirects.push(pathWithoutBlog);

            return redirects;
          }

          if (existingPath.includes("/blog/tags/")) {
            return [existingPath.replace("/blog/tags/", "/tag/")];
          }

          return undefined;
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.kdchang.net/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "KD 閱讀職場人生 🔖",
      // logo: {
      //   alt: "KD 閱讀職場人生 🔖",
      //   src: "img/logo.png",
      // },
      items: [
        { to: "blog", label: "最新文章", position: "left" },
        { to: "/bookstore", label: "人生推書店", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "resourceSidebar",
          position: "left",
          label: "學習資源",
        },
        { to: "/about", label: "關於本站", position: "left" },
        // {`
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "職涯技能樹",
        // },
        // {
        //   href: "https://facebook.com/groups/kdchang.net",
        //   label: "技術個人成長社群",
        //   position: "left",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "學習資源",
              to: "/resources",
            },
            {
              label: "熱門文章",
              to: "/blog/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook Group",
              href: "https://facebook.com/groups/kdchang.net",
            },
            {
              label: "Follow us on Facebook",
              href: "https://www.facebook.com/kdchang.net",
            },
            {
              label: "Follow us on Instagram",
              href: "https://www.instagram.com/kdchang_net",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contact Us",
              to: "mailto:kdchang.net@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KD 閱讀職場人生 🔖. Built with ❤️ in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

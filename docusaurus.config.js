import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'เอกสารของฉัน',
  tagline: 'เว็บไซต์เอกสารที่สร้างด้วย Docusaurus',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.jeerasakananta.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Responsive web design
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/responsive-nav@1.0.39/responsive-nav.min.js',
      async: true,
    },
  ],

  // Internationalization
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          authorsMapPath: './blog/authors.json',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        docsRouteBasePath: "/docs",
        indexBlog: true,
        indexPages: false,
        searchResultLimits: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jeerasak Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'search',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sitemap',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Sitemap',
                to: '/sitemap',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/jeerasak',
              },

              {
                label: 'Twitter',
                href: 'https://twitter.com/jeerasak',
              },
            ],
          },
          {
            title: 'เพิ่มเติม',
            items: [
              {
                label: 'บล็อก',
                to: '/blog',
              },
              {
                label: 'Sitemap',
                to: '/sitemap',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jeerasak',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jeerasak Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'python', 'php', 'go', 'rust'],
      },
      // Algolia DocSearch configuration
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
      },
      // Sitemap configuration
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    }),
};

export default config;

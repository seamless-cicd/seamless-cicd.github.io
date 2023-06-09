/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seamless CI/CD',
  tagline:
    'Open-source, low-config CI/CD pipeline for containerized microservices',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://seamless-cicd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seamless-cicd', // Usually your GitHub org/user name.
  projectName: 'seamless-cicd.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve docs at /my-doc instead of /docs/my-doc
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/og.jpg',
      metadata: [
        { name: 'og:title', content: 'Seamless CI/CD' },
        { name: 'og:url', content: 'https://seamless-cicd.com/' },
        { name: 'og:image', content: 'https://seamless-cicd.com/img/og.jpg' },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:image:alt',
          content:
            'Seamless CI/CD logo and tagline: Open-source, low-config CI/CD pipeline for containerized microservices',
        },
        {
          name: 'og:description',
          content:
            'Open-source, low-config CI/CD pipeline for containerized microservices',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Seamless CI/CD',
          src: 'img/seamless-logo-text-dark.svg',
          srcDark: 'img/seamless-logo-text-white.svg',
          width: 130,
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            docId: 'case-study',
            label: 'Case Study',
          },
          {
            to: 'presentation',
            position: 'right',
            label: 'Presentation',
          },
          {
            to: 'the-team',
            position: 'right',
            label: 'The Team',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiDocsSidebar',
            position: 'right',
            label: 'API',
          },
          {
            href: 'https://github.com/seamless-cicd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;

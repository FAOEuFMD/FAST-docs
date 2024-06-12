// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EuFMD FAST Docs",
  tagline: "Documentation for all EuFMD FAST tools.",
  favicon: "img/eufmd.jpeg",

  // Set the production url of your site here
  url: "https://eufmd-fast-docs.onrender.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/FAOEuFMD/FAST-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/FAOEuFMD/FAST-docs/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/eu-eufmd-fast-logo.png",
      navbar: {
        title: "EuFMD",
        logo: {
          alt:
            "Logo for the European Commission for the Control of Foot-and-Mouth Disease (EuFMD)",
          src: "img/eufmd.jpeg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Tutorials", position: "left" },
          {
            href: "https://github.com/FAOEuFMD/FAST-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "EuFMD Virtual Learning",
                href: "https://eufmdlearning.works",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/FAOEuFMD/FAST-docs",
              },
            ],
          },
        ],
        copyright: `MIT License, ${new Date().getFullYear()}. European Commission for the Control of Foot-and-Mouth Disease (EuFMD).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.duotoneDark,
      },
    }),
};

export default config;

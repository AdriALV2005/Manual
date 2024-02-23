// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Manuales de Instalación",
  tagline: "Guía paso a paso para instalación eficiente de software",
  favicon: "https://i.ibb.co/Sxv4YXF/logo-cat-code.png",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Manual",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AdriALV2005", // Usually your GitHub org/user name.
  projectName: "Manual", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Cat Code",
        logo: {
          alt: "Cat Code Logo",
          src: "https://i.ibb.co/Sxv4YXF/logo-cat-code.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Manuales",
          },
          {
            href: "https://github.com/AdriALV2005/Manual.git",
            label: "GitHub",
            position: "left",
          },
        ],
      },

      
      footer: {
        style: "dark",
        links: [
          {
            title: "Manuales",
            items: [
              {
                label: "Introducción",
                to: "/docs/intro",
              },
              {
                label: "Script de Instalación",
                to: "/docs/category/manual-para-script-de-instalación",
              },
              {
                label: "Docker + GitLab + SSL",
                to: "/docs/category/manual-de-instalación",
              },
              {
                label: "Linux | Valet",
                to: "/docs/category/manual-de-instalación-",
              },
              {
                label: "Instalación del Facturador",
                to: "/docs/category/instalación-del-facturador",
              },
            ],
          },
         
          {
            title: "Colaboradores",
            items: [
              {
                label: "Bryan Coronado",
                href: "https://github.com/BryanCoronado",
                target: "_blank",
              },
              {
                label: "Adribell Montes",
                href: "https://github.com/AdriALV2005",
                target: "_blank",
              },
            ],
          },
          {
            title: "Redes Sociales",
            items: [
              {
                label: "Portafolio B. Coronado",
                href: "https://portafolio-minimalista.netlify.app/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CatCode`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

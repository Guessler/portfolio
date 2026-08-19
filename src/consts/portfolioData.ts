import { CSS, FramerMotion, HTML, JS, Laravel, NextJS, ReactIcon, Tailwind, TS, Zustand } from "../../public/svg";
import websiteImage from "../../public/assets/png/ecotech.png";
import percar from "../../public/assets/png/percar.png";
// import sharixweb from "../../public/assets/png/sharixFrient.png";
import vvrem from "../../public/assets/png/vvrem.png";
// import trelloAnalog from "../../public/assets/png/trello-analog.png";
import soueast from "../../public/assets/png/soueast.png";
import acbg from "../../public/assets/png/acbg.png";
import arooma from "../../public/assets/png/arooma.png";
import ruschk from "../../public/assets/png/ruschk.png";
import { portfolioResponse } from "@/interfaces/baseResponse";

export const portfolioModalData: portfolioResponse[] = [
  {
    id: 1,
    name: { en: "ECOTECH", ru: "ЭКОТЕХ" },
    image: websiteImage,
    description: {
      en: "A website for the Ecotech company, which specializes in the construction of wooden houses with impeccable quality",
      ru: "Веб-сайт для компании ЭкоТех, которая спецализируется на строительстве деревянных домов с безупречным качеством",
    },
    contributions: {
      en: [
        "Developed the website from scratch — from structure design to full interface implementation",
        "Implemented an administrative panel for content and data management",
        "Integrated the frontend with backend services",
        "Optimized application performance and page load speed",
        "Participated in website architecture design and requirement discussions with the team/client",
      ],
      ru: [
        "Полностью разработал сайт с нуля — от структуры до реализации интерфейса",
        "Реализовал административную панель для управления контентом и данными",
        "Осуществил интеграцию frontend-части с backend-сервисами",
        "Оптимизировал производительность и скорость загрузки веб-приложения",
        "Участвовал в проектировании сайта и обсуждении требований с командой",
      ],
    },
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://ecotechstroy.ru/",
    type: "frontend",
  },
  {
    id: 2,
    name: { en: "ESTETIKKA HAUS", ru: "ЭстеТикка Хаус" },
    image: vvrem,
    description: {
      en: "Website for the ESTETIKKA HAUS company, which specializes in the renovation of apartments, private houses, and commercial premises",
      ru: "Веб-сайт для компании ЭстеТикка Хаус, которая спецализируется на ремонте квартир, частных домов, коммерческих помещений",
    },
    contributions: {
      en: [
        "Developed the website from scratch — from structure design to full interface implementation",
        "Implemented an administrative panel for content and data management",
        "Integrated the frontend with backend services",
        "Optimized application performance and page load speed",
        "Implemented UI animations using Framer Motion",
      ],
      ru: [
        "Полностью разработал сайт с нуля — от структуры до реализации интерфейса",
        "Реализовал административную панель для управления контентом и данными",
        "Осуществил интеграцию frontend-части с backend-сервисами",
        "Оптимизировал производительность и скорость загрузки веб-приложения",
        "Участвовал в проектировании сайта и обсуждении требований с командой",
      ],
    },
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS, FramerMotion],
    link: "https://vvrem.ru",
    type: "frontend",
  },
  {
    id: 3,
    name: { en: "PERCAR", ru: "PERCAR" },
    image: percar,
    description: {
      en: "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
      ru: "Веб-сайт для Estetikka Haus, компании, специализирующейся на ремонте квартир. Включает каталог услуг, портфолио проектов и калькулятор стоимости для быстрой обработки заявок.",
    },
    contributions: {
      en: [
        "Implemented the frontend part of the web application",
        "Integrated the application with backend services",
        "Designed code architecture and project structure",
        "Developed responsive and cross-browser layouts",
      ],
      ru: [
        "Реализовывал frontend-часть веб-приложения",
        "Осуществлял интеграцию с backend-сервисами",
        "Проектировал архитектуру кода и структуру проекта",
        "Выполнял адаптивную и кроссбраузерную верстку интерфейсов",
      ],
    },
    stack: [Laravel, JS, HTML, CSS, Tailwind],
    link: "https://percar.ru/",
    type: "frontend",
  },
  {
    id: 4,
    name: { en: "SOUEAST-NZV", ru: "SOUEAST-NZV" },
    image: soueast,
    description: {
      en: "Website for the Soueast mono-brand car center. It includes a catalog of models, detailed car pages, and application forms for easy selection and purchase.",
      ru: "Веб-сайт для монобрендового автоцентра Soueast. Включает каталог моделей, подробные страницы автомобилей и формы заявок для удобного подбора и покупки.",
    },
    contributions: {
      en: [
        "Implemented the frontend part of the web application",
        "Integrated the application with backend services",
        "Designed code architecture and project structure",
        "Developed responsive and cross-browser layouts",
      ],
      ru: [
        "Реализовывал frontend-часть веб-приложения",
        "Осуществлял интеграцию с backend-сервисами",
        "Проектировал архитектуру кода и структуру проекта",
        "Выполнял адаптивную и кроссбраузерную верстку интерфейсов",
      ],
    },
    stack: [Laravel, JS, HTML, CSS, Tailwind],
    link: "https://soueast-nzv.ru/",
    type: "frontend",
  },
  {
    id: 5,
    name: { en: "N-AUTOSALON", ru: "N-AUTOSALON" },
    image: acbg,
    description: {
      en: "A multi-brand car dealership website offering a wide selection of cars of different brands, with a catalog of models, current offers and a convenient system for selecting and processing applications.",
      ru: "Мультибрендовый веб-сайт автосалона, предлагающий широкий выбор автомобилей разных марок, с каталогом моделей, актуальными предложениями и удобной системой подбора и оформления заявок.",
    },
    contributions: {
      en: [
        "Implemented the frontend part of the web application",
        "Integrated the application with backend services",
        "Designed code architecture and project structure",
        "Developed responsive and cross-browser layouts",
      ],
      ru: [
        "Реализовывал frontend-часть веб-приложения",
        "Осуществлял интеграцию с backend-сервисами",
        "Проектировал архитектуру кода и структуру проекта",
        "Выполнял адаптивную и кроссбраузерную верстку интерфейсов",
      ],
    },
    stack: [Laravel, JS, HTML, CSS, Tailwind],
    link: "https://n-avtosalon.ru/",
    type: "frontend",
  },
  {
    id: 6,
    name: { en: "Ruschk", ru: "Русчк" },
    image: ruschk,
    description: {
      en: "A premium website for the sale of tables and chairs with an online designer that allows you to customize materials, sizes and furniture designs to meet individual needs, as well as view a catalog of ready-made solutions and place an order.",
      ru: "Премиальный веб-сайт по продаже столов и стульев с онлайн-конструктором, позволяющим настраивать материалы, размеры и дизайн мебели под индивидуальные потребности, а также просматривать каталог готовых решений и оформлять заказ.",
    },
    contributions: {
      en: [
        "Implemented the frontend part of the web application",
        "Designed code architecture and project structure",
        "Developed responsive and cross-browser layouts",
        "Implemented a table and chair constructor"
      ],
      ru: [
        "Реализовывал frontend-часть веб-приложения",
        "Проектировал архитектуру кода и структуру проекта",
        "Выполнял адаптивную и кроссбраузерную верстку интерфейсов",
        "Реализовал конструктор столов и стульев",
      ],
    },
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://site.ruschk.ru/",
    type: "frontend",
  },
  // {
  //   id: 5,
  //   name: { en: "SPORT-FRIEND", ru: "SPORT-FRIEND" },
  //   image: sharixweb,
  //   description: {
  //     en: "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
  //     ru: "Веб-сайт для Estetikka Haus, компании, специализирующейся на ремонте квартир. Включает каталог услуг, портфолио проектов и калькулятор стоимости для быстрой обработки заявок.",
  //   },
  //   contributions: {
  //     en: [
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //     ],
  //     ru: [
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //     ],
  //   },
  //   stack: [JS, HTML, CSS, Tailwind, ReactIcon],
  //   link: "https://sports.sharix.org/price/",
  //   type: "frontend",
  // },
  // {
  //   id: 6,
  //   name: { en: "TRELLO-ANALOG", ru: "TRELLO-ANALOG" },
  //   image: trelloAnalog,
  //   description: {
  //     en: "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
  //     ru: "Веб-сайт для Estetikka Haus, компании, специализирующейся на ремонте квартир. Включает каталог услуг, портфолио проектов и калькулятор стоимости для быстрой обработки заявок.",
  //   },
  //   contributions: {
  //     en: [
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //       "Developed responsive layouts for all pages based on Figma designs",
  //     ],
  //     ru: [
  //       "Разра��от��л адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //       "Разработал адаптивные макеты для всех страниц на основе дизайнов из Figma",
  //     ],
  //   },
  //   stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
  //   link: "https://vvrem.ru",
  //   type: "fullstack",
  // },
];
import pkg from './package.json'

export default {
  mode: `spa`,
  head: {
    title: pkg.name,
    titleTemplate: pkg.name,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { 'http-equiv': `X-UA-Compatible`, content: `IE=edge` },
      { hid: `author`, name: `author`, content: pkg.author },
      { hid: `description`, name: `description`, content: pkg.description },
      // open graph
      { hid: `og:title`, name: `og:title`, content: pkg.name },
      { hid: `og:type`, name: `og:type`, content: `website` },
      {
        hid: `og:description`,
        name: `og:description`,
        content: pkg.description,
      },
      { hid: `og:url`, name: `og:url`, content: pkg.homepage },
    ],
  },
  router: {
    // linkExactActiveClass: 'navigation__item--active',
  },
  loading: false,
  env: {},
  css: [],
  modules: [],
  axios: {},
  plugins: [
    `@/plugins/global-components.js`,
    // `@/plugins/i18n.js`,
    // { src: `@/plugins/browser-components.js`, ssr: false },
    // { src: `@/plugins/browser.js`, ssr: false },
    // { src: `@/plugins/vuex-local-storage.js`, ssr: false },
  ],
}

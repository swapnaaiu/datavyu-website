const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Datavyu',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'download',
        link: '/download/',
      },
      {
        text: 'user guide',
        items: [
          { text: 'the interface', link: '/interface/'},
          { text: 'the coding process', link: '/coding/'},
          { text: 'tutorial videos', link: '/tutorialvideos/'},
          { text: 'scripting', link: '/scripting/'},
          { text: 'glossary', link: '/glossary/'},
        ]
      },
      {
        text: 'support',
        link: '/support/'
      },
      {
        text: 'faq',
        items: [
          { text: 'general', link: '/integeneralrface/'},
          { text: 'technical requirements', link: '/requirements/'},
          { text: 'support', link: '/support/'},
          { text: 'API scripts', link: '/APIscripts/'},
          { text: 'reliability', link: '/reliability/'},
          { text: 'transcription', link: '/transcription/'},
          { text: 'MacSHAPA & OpenSHAPA', link: '/SHAPA/'}
        ]
      },
      {
        text: 'databrary',
        link: 'http://www.databrary.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

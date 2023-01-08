export default defineNuxtConfig({
  app: {
    head: {
      title: '73',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        },
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Media, Unlimited.'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: '73'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Media, Unlimited.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://setetr.es/share.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://setetr.es'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: '73'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Media, unlimited.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://setetr.es/share.png'
        },
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-zinc-900 font-sans pattern select-none'
      }
    }
  },
  css: [
    '~/assets/css/application.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})

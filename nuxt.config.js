// https://nuxt.com/docs/api/configuration/nuxt-config
// Blog pages on Vercel seem to be prerendered
// import axios from 'axios'
// import { apiBase } from './utils/api'

// const getPostRoutes = async () => {
  // Need to paginate to get all blog pages
//   const res = await axios.get(`${apiBase}/wp/v2/posts?per_page=100`)
//   return res?.data?.map((blog) => `/blog/${blog.slug}`)
// }

export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8080
  },
  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     const slugs = await getPostRoutes()
  //     nitroConfig.prerender?.routes?.push(...slugs)
  //   }
  // },
  css: [ '@/assets/styles/normalize.sass', '@/assets/styles/main.sass' ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ] 
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/yaz5c9bxr'
    },
    defaultProvider: 'imagekit'
  },
  googleFonts: {
    families: {
      Prompt: { wght: [100, 200, 300, 400, 600] },
      'Zilla+Slab': { wght: [300, 400, 500, 700] }
    },
    display: 'swap',
    subsets: 'latin'
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/global/_index.sass" as *\n'
        }
      }
    }
  }
})

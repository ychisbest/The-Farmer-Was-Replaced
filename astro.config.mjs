// @ts-check
import { defineConfig,passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING, } from './src/locales'
import tailwindcss from '@tailwindcss/vite';
import {SITE_URL} from "./src/consts"

// https://astro.build/config
export default defineConfig({

 image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  site: SITE_URL,

  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap({
    i18n: {
      defaultLocale: DEFAULT_LOCALE_SETTING,
      locales: Object.fromEntries(
        Object.entries(LOCALES_SETTING).map(
          ([key, value]) => [key, value.lang ?? key]
        )
      ),
    },
  })],

  vite: {
    plugins: [tailwindcss()],
  },


});
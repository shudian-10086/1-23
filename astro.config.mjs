// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 网站基础配置
  site: 'https://www.playfiddlebops.com',
  
  // 国际化配置
  i18n: {
    locales: ["en", "zh-CN", "de", "fr", "es", "ja", "ko"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  },

  // 集成配置
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          'en': 'en-US',
          'zh-CN': 'zh-CN',
          'de': 'de-DE',
          'fr': 'fr-FR',
          'es': 'es-ES',
          'ja': 'ja-JP',
          'ko': 'ko-KR'
        }
      }
    })
  ]
});

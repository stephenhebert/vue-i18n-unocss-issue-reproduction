import path from 'path'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    Vue(),
    Unocss(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: false,
      defaultSFCLang: "json",
    }),
  ],
})
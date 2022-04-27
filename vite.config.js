import path from 'path'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  mode: 'production',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'App',
      formats: ['es'],
      fileName: (format) => `App.${format}.js`
    },
    target: 'es2015',
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
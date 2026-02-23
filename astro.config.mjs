// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    site: 'https://tomato1337.site',
    output: 'server',

    adapter: node({
        mode: 'standalone',
    }),

    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        routing: 'manual',
    },

    vite: {
        plugins: [tailwindcss()],
    },
})

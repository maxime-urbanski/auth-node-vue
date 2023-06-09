import {fileURLToPath, URL} from 'node:url'
import basicSsl from '@vitejs/plugin-basic-ssl'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), basicSsl()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@/router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@/stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
            '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@/views': fileURLToPath(new URL('./src/views', import.meta.url))
        }
    }
})

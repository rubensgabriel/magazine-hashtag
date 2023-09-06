import {defineConfig} from 'vite'
import tailwindcss from '@vitejs/plugin-tailwindcss'

export default defineConfig({
    plugins: [tailwindcss()],
    base: "/magazine-hashtag"
})
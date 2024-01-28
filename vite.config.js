import { defineConfig } from 'vite'
// vite.config.js
import WindiCSS from 'vite-plugin-windicss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),WindiCSS()],
})

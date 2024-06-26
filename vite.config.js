import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias : {
      '@components' : path.resolve(__dirname , './src/components'),
      '@store' :path.resolve(__dirname , './src/store'),
      '@api' :path.resolve(__dirname , './src/api'),
      '@form' :path.resolve(__dirname , './src/components/form'),
      '@constants': path.resolve(__dirname , './src/constants'),
      '@pages' : path.resolve(__dirname, './src/pages')
    }
  }
})

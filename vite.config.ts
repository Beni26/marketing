import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://178.252.151.68:1407',
  //       changeOrigin: true,
  //       secure: false,
  //     }
  //   }
  // }
})

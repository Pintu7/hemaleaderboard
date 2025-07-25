import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Copia il file di configurazione Azure SWA
  copyFileSync('staticwebapp.config.json', 'dist/staticwebapp.config.json')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': 'http://localhost:5000',
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    define: {
      'process.env': {},
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL || ''),
    },
  }
})

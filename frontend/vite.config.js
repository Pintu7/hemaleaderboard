import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // Carica variabili da .env, .env.production, ecc.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': 'http://localhost:5000' // Dev only
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        }
      }
    },
    define: {
      // Per usare VITE_API_URL nel codice
      'process.env': {},
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL || '')
    }
  }
})

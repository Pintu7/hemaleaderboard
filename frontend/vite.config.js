import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // ✅ Solo se esiste, copia il file nella build finale
  const sourceConfigPath = './staticwebapp.config.json'
  const destConfigPath = './dist/staticwebapp.config.json'

  if (existsSync(sourceConfigPath)) {
    copyFileSync(sourceConfigPath, destConfigPath)
    console.log('✅ staticwebapp.config.json copied into dist/')
  } else {
    console.warn('⚠️ staticwebapp.config.json not found during build')
  }

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

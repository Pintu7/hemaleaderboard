export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true // se usi vite dev server
  }
})

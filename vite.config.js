import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TODO ADD ALIAS properly
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': "./src" } },
});

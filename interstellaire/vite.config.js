import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/interstellaire',
  plugins: [react(),tailwindcss(),glsl()],
})

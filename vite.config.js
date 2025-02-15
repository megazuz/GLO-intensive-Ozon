// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Указываем корневую папку (если нужно)
  build: {
    outDir: '../dist', // Папка для сборки
  },
});
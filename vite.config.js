import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // Menjaga alias '@' agar mengarah ke direktori 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  // 🚀 KONFIGURASI SERVER UNTUK MEMPERBAIKI KONEKSI HMR/WEBSOCKET
  server: {
    // 1. host: true
    // Ini menginstruksikan Vite untuk mendengarkan di semua antarmuka (0.0.0.0).
    // Ini adalah perbaikan paling umum untuk masalah 426/WebSocket, 
    // terutama saat menggunakan Docker, WSL, atau VM.
    host: true, 

    // 2. hmr: Konfigurasi Hot Module Replacement (HMR)
    hmr: {
      // clientPort: Memastikan browser mencoba menyambung pada port yang benar.
      clientPort: 5173,
      
      // host: Opsional. Biasanya tidak diperlukan jika host: true sudah disetel.
      // Jika masalah berlanjut, Anda dapat mencoba mengganti 'localhost' 
      // dengan IP lokal mesin Anda (misalnya, '192.168.1.100').
      host: 'localhost', 
    },
    // Jika Anda ingin mengubah port default 5173, tambahkan:
    // port: 8080 
  },
})
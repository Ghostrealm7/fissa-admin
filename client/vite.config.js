import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],


    server: {
      proxy: {
        // Proxy options
        '/api': {
          target: 'http://localhost:3500',
          changeOrigin: true,
          timeout: 600000, // Adjust the timeout in milliseconds (e.g., 10 minutes)
        },
      },
    },

})


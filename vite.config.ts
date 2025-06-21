import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: "/ReactJSDeveloper-Ade/", // HARUS pakai slash awal & akhir
  server:{
      watch: {
        usePolling: true,
    }
  },
  plugins: [ 
    react({
      include: "**/*.tsx",
    }),
    tailwindcss()
  ],
  
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/ReactJSDeveloper-Ade/",
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

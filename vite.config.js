import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    define: {
      'process.env.VITE_EMAIL_SERVICE_ID': JSON.stringify(process.env.EMAIL_SERVICE_ID),
      'process.env.VITE_EMAIL_TEMPLATE_ID': JSON.stringify(process.env.EMAIL_TEMPLATE_ID),
      'process.env.VITE_EMAIL_PUBLIC_KEY': JSON.stringify(process.env.EMAIL_PUBLIC_KEY),
      'process.env.VITE_EMAIL': JSON.stringify(process.env.EMAIL)
    },
    plugins: [react()],
  }
);

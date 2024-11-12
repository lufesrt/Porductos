import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',  // Permitir acceso desde fuera del contenedor
        port: 5173,
        watch: {
            usePolling: true,  // Para que Vite detecte cambios en Docker
        },
    },
});

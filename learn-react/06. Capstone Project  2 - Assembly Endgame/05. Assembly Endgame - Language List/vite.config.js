import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// 1. Importamos el compilador
import reactCompiler from 'babel-plugin-react-compiler';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    // 2. Lo añadimos a la lista de plugins de Babel
                    [reactCompiler, { target: '19' }],
                ],
            },
        }),
    ],
});
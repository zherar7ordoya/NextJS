import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [
        react()
    ],
    server: {
        proxy: {
            "/api": {
                target: "https://router.huggingface.co",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
                secure: false,
            },
        },
    },
})
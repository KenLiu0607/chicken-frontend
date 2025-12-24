import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/chicken-frontend/", // TODO: 將 YOUR_REPO_NAME 替換為您的 GitHub 儲存庫名稱
});

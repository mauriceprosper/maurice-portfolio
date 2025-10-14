import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "./" : "/", // ✅ works everywhere
  plugins: [react(), tailwindcss()],
  server: { open: true },
}));

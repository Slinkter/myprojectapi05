import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://slinkter.github.io/myprojectapi05",
  resolve: {
    alias: {
      "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
});

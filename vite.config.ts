import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"), // use relative alias
    },
  },
  build: {
    outDir: "dist/spa",
  },
});

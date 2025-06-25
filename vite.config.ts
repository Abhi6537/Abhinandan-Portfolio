import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace with your actual repo name (case-sensitive)
const repoName = "Abhinandan-protfolio"; // 👈 Change this if needed

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 REQUIRED for GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


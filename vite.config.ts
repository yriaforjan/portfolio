import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";

function cssBeforeJs(): Plugin {
  return {
    name: "css-before-js",
    transformIndexHtml(html) {
      const cssLinks: string[] = [];
      const cleaned = html.replace(
        /<link rel="stylesheet"[^>]*crossorigin[^>]*>/g,
        (match) => {
          cssLinks.push(match);
          return "";
        },
      );
      return cleaned.replace(/<script type="module"/, cssLinks.join("\n    ") + "\n    <script type=\"module\"");
    },
  };
}

export default defineConfig({
  plugins: [react(), cssBeforeJs()],
  build: {
    modulePreload: {
      resolveDependencies: (_filename, deps) =>
        deps.filter((dep) => !dep.includes("vendor-motion")),
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion")) {
            return "vendor-motion";
          }
        },
      },
    },
  },
});

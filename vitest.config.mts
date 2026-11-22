import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": path.resolve(import.meta.dirname, "src/lib"),
      "@components": path.resolve(import.meta.dirname, "src/components"),
      // Next resolves "server-only" itself; in tests it is a no-op.
      "server-only": path.resolve(
        import.meta.dirname,
        "node_modules/next/dist/compiled/server-only/empty.js"
      ),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}", "*.test.ts"],
  },
});

import type { StorybookConfig } from "@storybook/nextjs";

import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, "../public/"),
      "@app": path.resolve(__dirname, "../src/app/"),
      "@api": path.resolve(__dirname, "../src/app/api"),
      "@tests": path.resolve(__dirname, "../src/tests/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@lib": path.resolve(__dirname, "../src/lib/"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
    };
    // Server actions pull Node-only packages; swap them for browser-safe mocks.
    config.plugins ??= [];
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /lib\/actions\/submit-inquiry$/,
        path.resolve(__dirname, "./mocks/actions.ts")
      )
    );
    return config;
  },
};
export default config;

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
]);

module.exports = {
    env: {
        node: true,      // Quan trọng: Báo cho ESLint biết đây là môi trường Node.js
        commonjs: true,  // Quan trọng: Cho phép dùng require, module.exports
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
};
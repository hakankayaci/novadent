import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "test-results/**",
    "playwright-report/**",
    "public/**",
    "assets/**",
    "scratch/**",
    ".impeccable/**",
    "next-env.d.ts",
  ]),
]);

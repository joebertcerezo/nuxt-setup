# 🧠 Nuxt.js Starter Template — ESLint Configuration Guide

This project is a comprehensive **Nuxt 3 starter template** with an advanced and modular ESLint setup. It emphasizes **clean code**, **best practices**, and **development efficiency** with a modern, flat ESLint configuration (`eslint.config.ts`).

---

## 📁 ESLint Configuration Structure

This project uses the new **flat config** format (introduced in ESLint v9+) and separates concerns into modular files:

| File | Purpose |
|------|---------|
| `eslint.config.ts` | 🧩 Main config — imports all others |
| `eslint.ts` | 🧪 Core JavaScript linting rules |
| `typescript-eslint.ts` | ⚙️ TypeScript-specific linting |
| `vue.ts` | 🧱 Vue.js component rules |
| `vue-i18n.ts` | 🌐 i18n internationalization rules |
| `stylistic.ts` | 🎨 Code style and formatting |
| `jconc.ts` | 📦 JSON/JSONC file rules |

---

## 🚀 Key Features

### 🧪 JavaScript Rules
- Disallow problematic code (e.g., `var`, unused vars)
- Encourage modern syntax (arrow functions, template literals)
- Limit complexity (e.g., max depth, max nesting)

### ⚙️ TypeScript Rules
- Strict typing and method signature enforcement
- No shadowed variables or implicit `any`s
- Promotes type safety and clarity

### 🧱 Vue Rules
- Enforces `<template> → <script> → <style>` order
- Mandates `<script setup>` usage
- Typed `props` and `emits` required
- Enforces naming and attribute order conventions

### 🌐 Internationalization (Vue I18n)
- Locale keys must be in `snake_case`
- Prevents missing or unused translations
- Handles proper file structure and versioning

### 🎨 Code Style & Formatting
- Unified quote style, spacing, and semicolons
- Clean and modern stylistic conventions

### 📦 JSON/JSONC Rules
- Supports linting for `.json` and `.jsonc` files
- Automatically sorts locale files

---

## 🔗 Nuxt Integration

Using `withNuxt()` in the main ESLint config, Nuxt-specific files and patterns are seamlessly linted following best practices — including auto-imported components, composables, and app directories.

---

## 🛠 Getting Started

```bash
# Install dependencies
npm install
# or
pnpm install
```

```bash
# Run linter
npm run lint
# or
pnpm lint
```

```bash
# Fix auto-fixable issues
npm run lint:fix
# or
pnpm lint:fix
```

---

## 📦 Dependencies

- **ESLint v9+**
- `@typescript-eslint/*`
- `eslint-plugin-vue`
- `eslint-plugin-jsonc`
- `eslint-plugin-vue-i18n`
- `@stylistic/eslint-plugin`

---

## 📘 License

MIT © 2025

---


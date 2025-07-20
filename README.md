# Boilerplate Wizard

<p align="center">
  <img src="commitWizardLogo-blank-diamond.png" alt="BP Wizard Logo" width="320" />
</p>


A collection of **batteries‑included boilerplate generators** for modern web apps. Built to help developers scaffold production‑ready React and Next.js projects in seconds — with minimal configuration and zero cruft.

## What's Inside

This monorepo powers multiple `bp-wizard-create-*` CLI tools, each designed to spin up a new project with sensible defaults, testing, linting, and modern structure.

### Available Templates

| Template                      | Stack                            | CLI Command Example |
|------------------------------|----------------------------------|---------------------|
| React + JavaScript           | React + Vite + JS                | `npx bp-wizard-create-react-js my-app` |
| React + TypeScript           | React + Vite + TS                | `npx bp-wizard-create-react-ts my-app` |
| Next.js + JavaScript         | Next.js + Jest + Playwright      | `npx bp-wizard-create-next-js my-app` |
| Next.js + TypeScript         | Next.js + TypeScript + Testing   | `npx bp-wizard-create-next-ts my-app` |

Each generator installs a full-featured frontend project, complete with hot reloading, testing, linting, and formatting out of the box.

## Quick Start

To create a new project, run:

```bash
npx bp-wizard-create-react-js my-app
# or
npx bp-wizard-create-react-ts my-app
# or
npx bp-wizard-create-next-js my-app
# or
npx bp-wizard-create-next-ts my-app
```

Then:

```bash
cd my-app
npm install
npm run dev
```

No global install required.

## Features (Shared Across Templates)

- Modern React / Next.js setups
- Vite or App Router-based architecture
- Unit & E2E testing preconfigured (Vitest, Jest, Playwright)
- ESLint & Prettier
- Clean, responsive project structure
- TypeScript options where applicable

## Repo Structure

This monorepo contains separate template packages in `packages/`, each published independently to NPM:

```
packages/
├── create-react-js
├── create-react-ts
├── create-next-js
└── create-next-ts
```

Each package includes its own README, CLI entry point, and project scaffold.

## ✨ Why Use BP Wizard?

Setting up a frontend project from scratch takes time — BP Wizard gets you coding in seconds with:

- Common tools preconfigured
- Sensible defaults and modern folder structure
- Fast scaffolding via `npx` with no global installs

Perfect for hackathons, MVPs, portfolios, and internal tools.

## 📄 License

MIT © [Rhone Lachner](https://github.com/rhonelachner)

**Support this project:** [Buy me a coffee ☕️](https://coff.ee/rhone)

Check out my CLI commit formatter: [CommitWizard](https://www.npmjs.com/package/commitwizard-cli)

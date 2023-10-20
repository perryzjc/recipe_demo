# Recipe Demo

A simple recipe app built with React and Vite.

**New Feature**: This repository is equipped with a GitHub Action that automatically deploys to GitHub Pages whenever there's a push or pull request made to `main` or any branch with a pattern `feature/*`.

## Table of Contents
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Contributing](#contributing)
- [Best Practices](#best-practices)
- [Issues](#issues)

## Installation

After cloning the repository, navigate to the project root and run:

```bash
npm install
```

This will install all the necessary dependencies as defined in the `package.json` file.

## Development

To start the development server with Vite:

```bash
npm run dev
```

This will initiate the Vite dev server with hot module replacement (HMR), allowing you to visualize your changes in real-time.

## Building for Production

To deploy or test the production build:

```bash
npm run build
```

This command compiles your React project for production and places the results in the `dist/` directory.

## GitHub Pages Deployment

Whenever there's a push or pull request on the `main` branch or branches matching the pattern `feature/*`, a GitHub Action is triggered to automatically deploy the app to GitHub Pages.

## Contributing

1. **Fork and Clone:** For new team members, begin by forking the repository and then cloning your fork.
2. **Create a Branch:** Prior to making changes, forge a new branch for your feature or bug fix:

```bash
git checkout -b feature/my-new-feature
```

Substitute `my-new-feature` with a descriptive name for your modifications.

3. **Commit and Push:** Post changes, commit them, and then push the branch to your fork on GitHub:

```bash
git add .
git commit -m "Describe your changes here"
git push origin feature/my-new-feature
```

4. **Open a Pull Request (PR):** Navigate to the main repository on GitHub and initiate a new pull request from your branch. Seek a code review from a teammate.
5. **Review and Merge:** Upon PR review and endorsement, it can be amalgamated into the main branch.

## Best Practices

- Ensure commits are concise and pertinent. Every commit should epitomize a solitary logical alteration.
- Draft lucid commit messages elucidating the modifications.
- Always fetch the latest modifications from the main branch before commencing your work.
- Regularly push your branches to GitHub to avert data loss and to keep colleagues abreast.
- Introducing a new dependency? Ensure its indispensability, check its maintenance, and integrate it into the `package.json` file.

## Issues

Encounter problems or have proposals? Kindly raise an issue in the GitHub repository, furnishing comprehensive details.

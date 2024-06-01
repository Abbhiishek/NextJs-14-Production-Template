# Next.js Production Ready Template

This repository provides a comprehensive template for building production-ready Next.js 14 applications using the new App Router. It incorporates various tools and technologies to streamline development, improve code quality, and enhance the overall developer experience.



## Tech Stack

- **Next.js 14**: The latest version of Next.js with the new App Router.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **API Routes**: Next.js built-in API routes for server-side functionality.
- **Husky**: A tool for running scripts before Git commits.
- **Commitlint**: A linter for commit messages to ensure consistent conventions.
- **ESLint**: A pluggable linting tool for identifying and reporting code issues.
- **Drizzle**: A TypeScript-first object-relational mapper (ORM) for Node.js.
- **TypeScript**: A statically typed superset of JavaScript for better tooling and code quality.
- **App Router**: Next.js' new file-system-based routing mechanism.
- **Neon**: A tool for running serverless functions on the edge.
- **Uploadthing**: A library for handling file uploads in Next.js applications.
- **NextAuth.js**: An authentication library for Next.js applications.
- **shadcn/ui**: A collection of accessible and customizable Radix UI components for React.
- **Bun**: A modern package manager and JavaScript runtime.



## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo/next-production-template.git
```
2. Install dependencies:

```bash
bun install
```
3. Start the development server:

```bash
bun dev
```
The application will be available at http://localhost:3000.

## Code Quality
This template incorporates several tools to ensure code quality and consistency:

- **Husky**: Runs scripts before Git commits to catch potential issues early.
- **Commitlint**: Enforces a consistent commit message format.
- **ESLint**: Lints code for potential issues and enforces code style guidelines.


## Authentication

This template includes support for authentication using NextAuth.js. Popular authentication providers such as Google, GitHub, and Twitter are supported out of the box. You can easily add support for other providers by following the instructions in the NextAuth.js documentation.
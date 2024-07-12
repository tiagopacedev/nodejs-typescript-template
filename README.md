# Node.js TypeScript Template

## Getting Started

### 1. Initialize Node.js Project

Initialize your Node.js project with npm:

```bash
npm init -y
```

### 2. Install TypeScript

Install TypeScript and Node.js typings as development dependencies:

```bash
npm install typescript @types/node --save-dev
```

### 3. Configure TypeScript

Generate a `tsconfig.json` file for TypeScript configuration:

```bash
npx tsc --init
```

Update `tsconfig.json` with the following configuration:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "_version": "22.0.0", 
  "compilerOptions": {
    "lib": ["es2023"],
    "module": "node16",
    "target": "es2022",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```

### 4. Install Additional Packages

Install `tsx` for watching TypeScript files:

```bash
npm install tsx --save-dev
```

### 5. Run Your Application

Add a script to your `package.json` to run your application with `tsx`:

```json
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

### 6. Install Fastify

Install Fastify for creating your server:

```bash
npm install fastify
```

### 7. Initialize Prisma

Initialize Prisma with SQLite or PostgreSQL as your datasource:

```bash
npx prisma init --datasource-provider sqlite
# or
npx prisma init --datasource-provider postgresql
```

---

Adjust the instructions as per your specific project needs and environment setup. This template provides a basic structure to get started with a Node.js TypeScript project, including setting up TypeScript, installing dependencies, configuring TypeScript, running your application, installing Fastify, and initializing Prisma with SQLite or PostgreSQL.

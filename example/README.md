# vanilla-routing example

This example is built using TypeScript and [tsup](https://tsup.egoist.dev/) for bundling it into JavaScript.

## Getting Started

### With BrowserRouter example

To start the dev server, it will bundle the code and run it on http://localhost:3000

```bash
npm run start:browser
```

What this command does:

It run the following command to bundle the TypeScript code into JavaScript,

```bash
npx tsup main.ts --watch
```

And run the following command, to start the server

```bash
node server.js
```

### With HashRouter example

To start the dev server, it will bundle the code and run it on http://localhost:3001

```bash
npm run start:hash
```

What this command does:

It run the following command to bundle the TypeScript code into JavaScript,

```bash
npx tsup main.ts --watch
```

# Example of vanilla-routing

This example is built using TypeScript and [tsup](https://tsup.egoist.dev/) for bundling it into JavaScript.

## Getting Started

To start the dev server, it will bundle the code and run it on http://localhost:3000

```bash
npm start
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

---

This example supports both the BrowserRouter and the HashRouter. You can try changing the routing type in the `main.ts` file.

If you want to try `HashRouter`. Replace the `BrowserRouter` with the `HashRouter`.

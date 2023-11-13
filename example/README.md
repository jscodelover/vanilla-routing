# Example of vanilla-router-dom

This example is built using TypeScript and [tsup](https://tsup.egoist.dev/) for bundling it into JavaScript.

To bundle the TypeScript code into JavaScript, run the following command:

```bash
npx tsup main.ts --watch
```

This example supports both the BrowserRouter and the HashRouter. You can try changing the routing type in the `main.ts` file.

If you want to try `BrowserRouter`

Run the following command

```bash
node server.js
```

If you want to try `HashRouter`. Replace the `BrowserRouter` with the `HashRouter` and

Run the following command to bundle the TypeScript code into JavaScript

```bash
npx tsup main.ts --watch
```

and then run you index.html file in the browser,

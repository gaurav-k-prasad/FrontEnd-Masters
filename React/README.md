## Steps

1. make a _.prettierrc_ file and put a {} in it so to make prettier use default configuration
2. `npm init -y`
3. in package.json in scripts write = `format : prettier --write "src/**/*.js"` to allow running npm run format and will format all js in src folder
4. Making a eslint file
5. Run `npm install -D eslint@latest eslint-config-prettier@latest globals@latest`
6. make a _eslint.config.mjs_ file
7. `/** @type {import("eslint").Linter.Config[]} */` it enables auto completions - tells vs code that this is the type
8. _eslint-config-prettier_ - configuration that disables eslint rules that may conflict with prettier
9. Ask copilot to explain **All the elements in array are run sequentially and their order matters**

```javascript
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import globals from "globals"; // Eslint wont' mistakenly mark global variables as undefined

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Configurations
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];

```

10. add `"lint": "eslint"` in scripts in package.json
11. `npm install -D vite@5.4.2 @vitejs/plugin-react@4.3.1`
12. In script tag `src="./src/App.js"` add `type="module"`
13. Make a _vite.config.js_ file
14. `npm i react@latest react-dom@latest`
15. Add in package.json scripts

```js
"dev": "vite", // For npm run dev
"build": "vite build", // for github actions for building
"preview": "vite preview", // Preview the production build to test in production environment
```

16. Add `"type": "module"` using es modules
17. `npm i -D eslint-plugin-react@latest` for additional linting for react

## UseContext
1. Solves problem of prop drilling
2. It's like a portal where you declare a state in parent and use it somewhere else without needing to pass it as props
3. Eg - themes
4. Make a file of contexts.js to store all contexts
5. Wrap everything that you want to have context in `<Context.Provider></Context.Provider>`

## TanStack Router
1. Follow the documentation to install things and make files as per documentation
2. Put all the pages with routes into the routes folder and name them as - component.jsx for normal and component.lazy.jsx for lazy loading
3. __root.jsx is the main file and it will determine the layout for `<Outlet />` which will be the part that will be replaced in each route(template)
4. Except for root route everything will either create a `createFileRoute` or `createLazyFileRoute - (stores in cache)` and everything else component will be same
5. Always use `<Link to={"/route"}></Link>` to link another client side page
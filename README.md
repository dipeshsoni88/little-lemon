# Little Lemon — React App

This is the Little Lemon demo application built with Create React App. It includes pages for Home, Chicago location, Menu Specials, Testimonials and a booking flow with persistence for demo/testing.

This README documents how to set up the project, run it locally, run tests, lint the code, and build/deploy the app.

## Prerequisites

- Node.js (LTS recommended) and `npm` installed on your machine.
- Windows PowerShell (commands in this README assume PowerShell syntax).

## Project structure

- `public/` — static assets served as-is. App images are under `public/assets/images/`.
- `src/js/` — React application source files (components and pages).
- `src/css/` — project CSS files.
- `src/tests/` — Jest + React Testing Library unit and integration tests.
- `src/index.js` — CRA entrypoint that imports from `src/js/index.js`.

## Available scripts

Run these from the repository root (Windows PowerShell):

```powershell
npm install
npm start
npm test
npm run build
npm run lint
npm run lint:fix
```

- `npm start` — Start the development server (opens at `http://localhost:3000`).
- `npm test` — Run the test suite once (non-watch mode) or in watch mode if run interactively.
- `npm run build` — Build the app for production into the `build/` folder.
- `npm run lint` — Run ESLint checks.
- `npm run lint:fix` — Run ESLint with `--fix` to auto-correct fixable issues.

Example commands (PowerShell):

```powershell
# install deps
npm install

# dev server
npm start

# run tests once
npm test -- --watchAll=false

# build for production
npm run build

# lint
npm run lint
```

## Tests

- Tests use Jest and React Testing Library. Tests live in `src/tests/` and import components from `src/js/`.
- Tests are written to prefer accessible queries (getByRole, getByLabelText, etc.).
- To run a single test file use:

```powershell
npm test -- src/tests/Pages.test.js --watchAll=false
```

## Linting & Code Style

- ESLint is configured (see `.eslintrc.json`) to follow the `react-app` rules and accessibility checks.
- Run `npm run lint` to check and `npm run lint:fix` to apply auto-fixes.

## Accessibility

- The app includes accessibility improvements (skip link, aria attributes, semantic headings and regions). The tests include an a11y test for the booking form.

## Images and assets

- Place image files in `public/assets/images/` and reference them with `/assets/images/<name>` in source components. This keeps them served as static assets by CRA.

## Deployment

- The app builds to a static set of files in `build/` using `npm run build`.
- You can deploy the contents of `build/` to any static host (Netlify, Vercel, GitHub Pages, Firebase Hosting, Surge, etc.).

Example: deploy to Firebase Hosting

```powershell
# install firebase cli globally if you don't have it
npm install -g firebase-tools

# build
npm run build

# deploy (run inside your project and follow prompts)
firebase deploy --only hosting
```

Example: deploy to GitHub Pages

1. Add the `homepage` field in `package.json` with your URL (e.g., `https://<user>.github.io/<repo>`).
2. Install `gh-pages` as a devDependency and add the `predeploy`/`deploy` scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```powershell
npm run deploy
```

## Notes & Troubleshooting

- If tests fail after content changes, ensure test expectations match UI text (headings and link labels) and queries are scoped (use `within()` when there are duplicate link texts in CTA vs nav).
- If `npm install` reports peer dependency issues, try:

```powershell
npm install --legacy-peer-deps
```

- If CRA reports "Could not find a required file: index.js (searched in src)", ensure `src/index.js` exists and imports `./js/index`.

## Contact / Maintainers

This repository was prepared as an instructional demo. Open an issue or PR for any changes.# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

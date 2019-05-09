# Tellers' Desk Desktop Platform

### Creating the application

Reference:
-[Writing Your First Electron App](https://electronjs.org/docs/tutorial/first-app#writing-your-first-electron-app "Writing Your First Electron App")

```
npm init
```

When prompted for project's information:
- **package name: (td-desktop)**
- **version: (1.0.0)**
- **description:** Tellers' Desk Desktop Platform for the Web Application
- **entry point: (index.js)** main.js
- **test command:** 
- **git repository:** 
- **keywords:** tellersdesk storytelling rpg wod world-of-darkness
- **author:** Alejo Ceballos
- **license: (ISC)** MIT

### Installing Electron

Reference:
- [Installing Electron](https://electronjs.org/docs/tutorial/first-app#installing-electron "Installing ELectron")

```
yarn add --dev electron
```

### Adding ESLint

See [Adding ESLint](../README.files/README.ESLint.md "Adding ESLint")

## IDE Settings

#### Electron/Web Application Debug Configuration

Reference:
- [Getting started with Electron in WebStorm](https://blog.jetbrains.com/webstorm/2016/05/getting-started-with-electron-in-webstorm/ "Getting started with Electron in WebStorm")

Go to `Run -> Edit Configurations -> Add New Configuration` and set the following:

- For `Attach to Node.js/Chrome` option (debugging the electron application):
  - **Name:** [Electron] Debug Render
  - **Host:** localhost
  - **Port:** 9222
  - Select **Attach to** `Chrome or Node.js > 6.3 started with --inspect`

- For `Node.js` option (debugging the web application):
  - **Name:** [Electron] Main
  - **Node interpreter:** <project-folder>/node_modules/.bin/electron
  - **Node parameters:** .
  - **Working directory:** <project-folder>
  - **Application parameters:** --remote-debugging-port=9222


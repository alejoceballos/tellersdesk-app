# Adding ESLint

References:
- [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started "Getting Started with ESLint")
- [babel-eslint (npm)](https://www.npmjs.com/package/babel-eslint "babel-eslint (npm)")
- [Setting up ESLint in React](https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7 "Setting up ESLint in React")
- [Practical Tutorial To Add Eslint To Your ReactJS Project Fast](https://felipelinsmachado.com/eslint-react/ "Practical Tutorial To Add Eslint To Your ReactJS Project Fast")

```
yarn add --dev eslint
yarn add --dev eslint-config-prettier
yarn add --dev eslint-plugin-import
yarn add --dev eslint-plugin-prettier
yarn add --dev eslint-plugin-react
yarn add --dev babel-eslint
```

### Preventing ESLint errors

Create a `.env` file with `SKIP_PREFLIGHT_CHECK=true` content:

```
echo "SKIP_PREFLIGHT_CHECK=true" > .env
```

## IDE Settings

#### IDE Auto Lint (File Watchers)

Reference: 
- [Even faster code formatting using ESLint](https://medium.com/@netczuk/even-faster-code-formatting-using-eslint-22b80d061461 "Even faster code formatting using ESLint")

Go to `File -> Settings -> File Watchers -> Add` and set the following values:
- **Name:** ESLint
- **File Type:** JavaScript
- **Scope:** Current File
- **Program:** <project-folder>/node_modules/eslint/bin/eslint.js
- **Arguments:** --fix $FilePath$
- **Output paths to refresh:** $FileDir$
- Uncheck `Auto-save edited files to trigger the watcher`
- Uncheck `Trigger the watcher on external changes`

#### On Windows

Using PowerShell or any other Windows terminal, install eslint dependencies
```
npm install -g eslint
npm install -g eslint-plugin-import
npm install -g eslint-plugin-flowtype
npm install -g eslint-plugin-jsx-a11y
npm install -g eslint-plugin-react
npm install -g eslint-plugin-react-hooks
npm install -g eslint-config-prettier
npm install -g eslint-plugin-prettier
npm install -g babel-eslint
```

Go to `File -> Settings -> File Watchers -> Add` and set the following values:
- **Name:** ESLint
- **File Type:** JavaScript
- **Scope:** Current File
- **Program:** C:\Users\<username>\AppData\Roaming\npm\eslint
- **Arguments:** --fix $FilePath$
- **Output paths to refresh:** $FileDir$
- **Working directory:** C:\Users\<username>\AppData\Roaming\npm
- Uncheck `Auto-save edited files to trigger the watcher`
- Uncheck `Trigger the watcher on external changes`

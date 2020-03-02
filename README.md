@types/pdfmake is not found correctly in my vue project. So I created this basic vue app to highlight my issue. See the `src/sample.ts` file where the issue is visible.

Importing the declarations from node_modules is not being detected... unless you I add a Triple-Slash Directive.

This small repo was created with the vue cli.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

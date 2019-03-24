# Reproduction for [angular2-template-loader/#86](https://github.com/TheLarkInn/angular2-template-loader/issues/86)

Run `npm run start` to compile and start the application. This will open the application in a browser.

This will fail with the error:

```
Uncaught Error: Expected 'styles' to be an array of strings.
```

The result of `require('./src/app.component.css')` is printed to the console.

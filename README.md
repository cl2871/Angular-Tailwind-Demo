# TailwindAngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Tailwind and Project Creation Guide

### Create the Project

Note this is for Angular 8.

`ng new Tailwind-Angular-Demo --style=scss`

### Install Dependencies

`npm i tailwindcss postcss-scss postcss-import postcss-loader @angular-builders/custom-webpack -D`

### Import Tailwind

Import tailwind into `styles.scss`.

```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### Create Tailwind Config

`npx tailwind init`

### Create Webpack Config

Add the `webpack.config.js` to project root.

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: () => [
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ]
                }
            }
        ]
    }
};
```

### Update angular.json

Change the 2 `builder` properties.
Add the 2 `customWebpackConfig` options.

```
{
  "architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        }
      }
    },
    "serve": {
      "builder": "@angular-builders/custom-webpack:dev-server",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        }
      }
    }
  }
}
```

### Run the Server

`npm start`

### Custom Components and Utilities

Update the `styles.scss` to include custom css.

```
@import 'tailwindcss/base';
@import 'tailwindcss/components'; 
@import './custom-tailwind/custom-components.css';
@import 'tailwindcss/utilities';
@import './custom-tailwind/custom-utilities.css';
```

The `custom-tailwind` directory and its files `custom-components.css` and `custom-utilities.css` can be added for reusable components and utilities.

### References

https://dev.to/seankerwin/angular-8-tailwind-css-guide-3m45
https://medium.com/@bajzat.tamas/setup-tailwind-css-in-angular-8-project-6e9264e97329

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Eslint with Airbnb Style Guide

> Linting is process of filtering code practices and making the code more consistent. It also helps us to avoid some runtime errors related with imports, missing commas, debugging logs, etc. The most common choice with Javascript is the `Eslint`, so i choose it!

Just so you know, the packages we are going to use are:

- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

> [!NOTE]
> I will cover Airbnb Style Guide installation, feel free to change it! Just keep in mind: "Consistency is the key for readability".

[Eslint configuration](../.eslintrc.json):

```json
{
  "env": {
    "es2022": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  "overrides": [],
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "import/prefer-default-export": "off"
  }
}

```

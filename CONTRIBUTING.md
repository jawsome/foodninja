# Contributing

## directories

```
foodninja
├── examples
├── images
├── recipes
└── test
```

### examples

Format definition of recipe resources can be found in [recipe-name.md](./examples/recipe-name.md).

### images

Image storage for reference in recipes

### recipes

Recipes in the format of markdown files.

### test

Be sure to test before PR

## dependencies

* git
* node
* npm

## getting started

```sh
git clone git@github.com:jawsome/foodninja.git
cd foodninja
npm install
npm test
cp examples/recipe-name.md recipes/my-recipe.md
```

Edit recipes/my-recipe.md with your favorite markdown text editor, then
  test again.

```sh
npm test
```

## markdownlint

[markdownlint](https://github.com/DavidAnson/markdownlint) is used for style
  checking among other things.

### rules

> examples/recipe-name.md: 30: MD006 Consider
  starting bulleted lists at the beginning of the line

Use the [rules](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)
  page to get clarification on the MD000-codes

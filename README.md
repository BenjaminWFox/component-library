## React Component Library

This is a demo component library for a tutorial on creating a component library that abstracts another 3rd-party library.

To get started:

`npm install`

To build the library:

`npm run build`

To watch the files & build on changes:

`npm run watch`

### Important

If you want to use this with the sibling project below, you'll have to address the 'duplicate react' issue by running the `npm link` command below AFTER you have cloned and run `npm install` on BOTH this project and the library-consumer.

`npm link ../library-consumer/node_modules/react`

### Sibling project

See the sibling project (library-consumer) for an example of using this library during local development

https://github.com/BenjaminWFox/library-consumer
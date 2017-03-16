![https://travis-ci.org/jaysoo/todomvc-redux-react-typescript](https://api.travis-ci.org/jaysoo/todomvc-redux-react-typescript.svg)

This is an implementation of [TodoMVC](http://todomvc.com/) built using:

- [React & ReactDOM](http://facebook.github.io/react/) 15.4.2
- [Redux](https://github.com/rackt/redux) 3.6.0
- [TypeScript](http://www.typescriptlang.org/) 2.2.1

It is adapted from the [redux TodoMVC example](https://github.com/rackt/redux/tree/master/examples/todomvc).

Read more about it in my blog post: http://jaysoo.ca/2015/09/26/typed-react-and-redux/

## Getting Started

Requirement:

- NodeJS 6+

Install dependencies:

```
npm install
```

## Running development server

Run webpack dev server (for assets):

```
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/).

## Running production server

```
npm run start:prod
```

Visit [http://localhost:3000/](http://localhost:3000/).

This will build the assets for you on the first run. For subsequent starts, you should run:

```
npm run build
```

### Testing

To run tests, use:

```
npm test
```

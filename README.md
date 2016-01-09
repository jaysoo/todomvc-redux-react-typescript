![](https://api.travis-ci.org/jaysoo/todomvc-redux-react-typescript.svg)

This is an implementation of [TodoMVC](http://todomvc.com/) built using:

- [React](http://facebook.github.io/react/) 0.14.6
- [Redux](https://github.com/rackt/redux) 3.0.4
- [TypeScript](http://www.typescriptlang.org/) 1.7.5

It is adapted from the [redux TodoMVC example](https://github.com/rackt/redux/tree/master/examples/todomvc).

Read more about it in my blog post: http://jaysoo.ca/2015/09/26/typed-react-and-redux/

## Getting Started

Requirement:

- NodeJS 4+

Install dependencies:

```
npm install
```

Start application:

```
npm start
```

Visit [http://localhost:8000/](http://localhost:8000/).

**Note:** This will run the pre-built JavaScript files, if you want to play around with the source
you need to run the development server with webpack dev server (See below).

---

## Running development server

Run webpack dev server (for assets):

```
npm run dev-server
```

Run server:

```
npm run start-dev
```

## Running production server

Build assets:

```
npm run build
```

Run server:

```
npm start
```

### Testing

To run tests, use:

```
npm test
```

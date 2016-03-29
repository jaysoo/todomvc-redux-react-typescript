![https://travis-ci.org/jaysoo/todomvc-redux-react-typescript](https://api.travis-ci.org/jaysoo/todomvc-redux-react-typescript.svg)

This is an implementation of [TodoMVC](http://todomvc.com/) built using:

- [React & ReactDOM](http://facebook.github.io/react/) 0.14.7
- [Redux](https://github.com/rackt/redux) 3.0.6
- [TypeScript](http://www.typescriptlang.org/) 1.8.9

It is adapted from the [redux TodoMVC example](https://github.com/rackt/redux/tree/master/examples/todomvc).

Read more about it in my blog post: http://jaysoo.ca/2015/09/26/typed-react-and-redux/

## Getting Started

Requirement:

- NodeJS 4+

Install dependencies:

```
npm install
```
## Running production server

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
npm run start:dev
```

Visit [http://localhost:8000/](http://localhost:8000/).


### Testing

To run tests, use:

```
npm test
```

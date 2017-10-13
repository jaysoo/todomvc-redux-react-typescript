"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var App_1 = require("./main/components/App");
var reducer_1 = require("./main/reducer");
var initialState = {};
var store = redux_1.createStore(reducer_1["default"], initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1["default"], null)), document.getElementById('app'));

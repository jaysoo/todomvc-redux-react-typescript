"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var todos_1 = require("../todos");
var rootReducer = redux_1.combineReducers({
    todos: todos_1["default"]
});
exports["default"] = rootReducer;

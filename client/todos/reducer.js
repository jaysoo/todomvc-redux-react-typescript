"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var redux_actions_1 = require("redux-actions");
var ActionTypes_1 = require("./constants/ActionTypes");
var initialState = [{
        text: 'Use Redux with TypeScript',
        completed: false,
        id: 0
    }];
exports["default"] = redux_actions_1.handleActions((_a = {},
    _a[ActionTypes_1.ADD_TODO] = function (state, action) {
        return [{
                id: state.reduce(function (maxId, todo) { return Math.max(todo.id, maxId); }, -1) + 1,
                completed: action.payload.completed,
                text: action.payload.text
            }].concat(state);
    },
    _a[ActionTypes_1.DELETE_TODO] = function (state, action) {
        return state.filter(function (todo) {
            return todo.id !== action.payload.id;
        });
    },
    _a[ActionTypes_1.EDIT_TODO] = function (state, action) {
        return state.map(function (todo) {
            return todo.id === action.payload.id
                ? lodash_1.assign({}, todo, { text: action.payload.text })
                : todo;
        });
    },
    _a[ActionTypes_1.COMPLETE_TODO] = function (state, action) {
        return state.map(function (todo) {
            return todo.id === action.payload.id ?
                lodash_1.assign({}, todo, { completed: !todo.completed }) :
                todo;
        });
    },
    _a[ActionTypes_1.COMPLETE_ALL] = function (state, action) {
        var areAllMarked = state.every(function (todo) { return todo.completed; });
        return state.map(function (todo) { return lodash_1.assign({}, todo, {
            completed: !areAllMarked
        }); });
    },
    _a[ActionTypes_1.CLEAR_COMPLETED] = function (state, action) {
        return state.filter(function (todo) { return todo.completed === false; });
    },
    _a), initialState);
var _a;

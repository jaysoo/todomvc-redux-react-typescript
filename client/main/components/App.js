"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var React = require("react");
var todos_1 = require("../../todos");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _a = this.props, todos = _a.todos, dispatch = _a.dispatch;
        return (React.createElement("div", { className: "todoapp" },
            React.createElement(todos_1.Header, { addTodo: function (text) { return dispatch(todos_1.addTodo(text)); } }),
            React.createElement(todos_1.MainSection, { todos: todos, editTodo: function (t, s) { return dispatch(todos_1.editTodo(t, s)); }, deleteTodo: function (t) { return dispatch(todos_1.deleteTodo(t)); }, completeTodo: function (t) { return dispatch(todos_1.completeTodo(t)); }, clearCompleted: function () { return dispatch(todos_1.clearCompleted()); }, completeAll: function () { return dispatch(todos_1.completeAll()); } })));
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) { return ({
    todos: state.todos
}); };
exports["default"] = react_redux_1.connect(mapStateToProps)(App);

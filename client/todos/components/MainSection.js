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
var React = require("react");
var TodoItem_1 = require("./TodoItem");
var Footer_1 = require("./Footer");
var TodoFilters_1 = require("../constants/TodoFilters");
var TODO_FILTERS = (_a = {},
    _a[TodoFilters_1.SHOW_ALL] = function () { return true; },
    _a[TodoFilters_1.SHOW_ACTIVE] = function (todo) { return !todo.completed; },
    _a[TodoFilters_1.SHOW_COMPLETED] = function (todo) { return todo.completed; },
    _a);
;
;
var MainSection = (function (_super) {
    __extends(MainSection, _super);
    function MainSection(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { filter: TodoFilters_1.SHOW_ALL };
        return _this;
    }
    MainSection.prototype.handleClearCompleted = function () {
        var atLeastOneCompleted = this.props.todos.some(function (todo) { return todo.completed; });
        if (atLeastOneCompleted) {
            this.props.clearCompleted();
        }
    };
    MainSection.prototype.handleShow = function (filter) {
        this.setState({ filter: filter });
    };
    MainSection.prototype.renderToggleAll = function (completedCount) {
        var _a = this.props, todos = _a.todos, completeAll = _a.completeAll;
        if (todos.length > 0) {
            return (React.createElement("input", { className: "toggle-all", type: "checkbox", checked: completedCount === todos.length, onChange: function () { return completeAll(); } }));
        }
    };
    MainSection.prototype.renderFooter = function (completedCount) {
        var todos = this.props.todos;
        var filter = this.state.filter;
        var activeCount = todos.length - completedCount;
        if (todos.length) {
            return (React.createElement(Footer_1["default"], { completedCount: completedCount, activeCount: activeCount, filter: filter, onClearCompleted: this.handleClearCompleted.bind(this), onShow: this.handleShow.bind(this) }));
        }
    };
    MainSection.prototype.render = function () {
        var _a = this.props, todos = _a.todos, completeTodo = _a.completeTodo, deleteTodo = _a.deleteTodo, editTodo = _a.editTodo;
        var filter = this.state.filter;
        var filteredTodos = todos.filter(TODO_FILTERS[filter]);
        var completedCount = todos.reduce(function (count, todo) {
            return todo.completed ? count + 1 : count;
        }, 0);
        return (React.createElement("section", { className: "main" },
            this.renderToggleAll(completedCount),
            React.createElement("ul", { className: "todo-list" }, filteredTodos.map(function (todo) {
                return React.createElement(TodoItem_1["default"], { key: todo.id, todo: todo, editTodo: editTodo, completeTodo: completeTodo, deleteTodo: deleteTodo });
            })),
            this.renderFooter(completedCount)));
    };
    return MainSection;
}(React.Component));
exports["default"] = MainSection;
var _a;

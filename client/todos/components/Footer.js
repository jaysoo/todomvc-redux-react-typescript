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
var classNames = require("classnames");
var TodoFilters_1 = require("../constants/TodoFilters");
var FILTER_TITLES = (_a = {},
    _a[TodoFilters_1.SHOW_ALL] = 'All',
    _a[TodoFilters_1.SHOW_ACTIVE] = 'Active',
    _a[TodoFilters_1.SHOW_COMPLETED] = 'Completed',
    _a);
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.renderTodoCount = function () {
        var activeCount = this.props.activeCount;
        var itemWord = activeCount === 1 ? 'item' : 'items';
        return (React.createElement("span", { className: "todo-count" },
            React.createElement("strong", null, activeCount || 'No'),
            " ",
            itemWord,
            " left"));
    };
    Footer.prototype.renderFilterLink = function (filter) {
        var title = FILTER_TITLES[filter];
        var _a = this.props, selectedFilter = _a.filter, onShow = _a.onShow;
        return (React.createElement("a", { className: classNames({ selected: filter === selectedFilter }), style: { cursor: 'pointer' }, onClick: function () { return onShow(filter); } }, title));
    };
    Footer.prototype.renderClearButton = function () {
        var _a = this.props, completedCount = _a.completedCount, onClearCompleted = _a.onClearCompleted;
        if (completedCount > 0) {
            return (React.createElement("button", { className: "clear-completed", onClick: function () { return onClearCompleted(); } }, "Clear completed"));
        }
    };
    Footer.prototype.render = function () {
        var _this = this;
        return (React.createElement("footer", { className: "footer" },
            this.renderTodoCount(),
            React.createElement("ul", { className: "filters" }, [TodoFilters_1.SHOW_ALL, TodoFilters_1.SHOW_ACTIVE, TodoFilters_1.SHOW_COMPLETED].map(function (filter) {
                return React.createElement("li", { key: filter }, _this.renderFilterLink(filter));
            })),
            this.renderClearButton()));
    };
    return Footer;
}(React.Component));
exports["default"] = Footer;
var _a;

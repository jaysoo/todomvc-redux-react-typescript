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
var TodoTextInput_1 = require("./TodoTextInput");
;
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.handleSave = function (text) {
        if (text.length !== 0) {
            this.props.addTodo(text);
        }
    };
    Header.prototype.render = function () {
        return (React.createElement("header", { className: "header" },
            React.createElement("h1", null, "todos"),
            React.createElement(TodoTextInput_1["default"], { newTodo: true, onSave: this.handleSave.bind(this), placeholder: "What needs to be done?" })));
    };
    return Header;
}(React.Component));
exports["default"] = Header;

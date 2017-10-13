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
var TodoTextInput = (function (_super) {
    __extends(TodoTextInput, _super);
    function TodoTextInput(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            text: _this.props.text || ''
        };
        return _this;
    }
    TodoTextInput.prototype.handleSubmit = function (e) {
        var text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    };
    TodoTextInput.prototype.handleChange = function (e) {
        this.setState({ text: e.target.value });
    };
    TodoTextInput.prototype.handleBlur = function (e) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };
    TodoTextInput.prototype.render = function () {
        return (React.createElement("input", { className: classNames({
                edit: this.props.editing,
                'new-todo': this.props.newTodo
            }), type: "text", placeholder: this.props.placeholder, autoFocus: true, value: this.state.text, onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onKeyDown: this.handleSubmit.bind(this) }));
    };
    return TodoTextInput;
}(React.Component));
exports["default"] = TodoTextInput;

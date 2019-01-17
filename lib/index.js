"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _liformReact = require("liform-react");

var _StringWidget = require("./StringWidget");

var _StringWidget2 = _interopRequireDefault(_StringWidget);

var _ObjectWidget = require("./ObjectWidget");

var _ObjectWidget2 = _interopRequireDefault(_ObjectWidget);

var _DateWidget = require("./DateWidget");

var _DateWidget2 = _interopRequireDefault(_DateWidget);

var _DateTimeWidget = require("./DateTimeWidget");

var _DateTimeWidget2 = _interopRequireDefault(_DateTimeWidget);

var _ArrayWidget = require("./ArrayWidget");

var _ArrayWidget2 = _interopRequireDefault(_ArrayWidget);

var _ChoiceWidget = require("./ChoiceWidget");

var _ChoiceWidget2 = _interopRequireDefault(_ChoiceWidget);

var _NumberWidget = require("./NumberWidget");

var _NumberWidget2 = _interopRequireDefault(_NumberWidget);

var _BooleanWidget = require("./BooleanWidget");

var _BooleanWidget2 = _interopRequireDefault(_BooleanWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _liformReact.DefaultTheme, {
  object: _ObjectWidget2.default,
  string: _StringWidget2.default,
  date: _DateWidget2.default,
  datetime: _DateTimeWidget2.default,
  array: _ArrayWidget2.default,
  choice: _ChoiceWidget2.default,
  number: _NumberWidget2.default,
  integer: _NumberWidget2.default,
  boolean: _BooleanWidget2.default

});
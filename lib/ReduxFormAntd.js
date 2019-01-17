"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADatePicker = exports.ARangePicker = exports.ATextarea = exports.ACheckbox = exports.ASelect = exports.ARadioGroup = exports.AInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _antd = require("antd");

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioGroup = _antd.Radio.Group;
var TextArea = _antd.Input.TextArea;
var RangePicker = _antd.DatePicker.RangePicker;


var formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0
//     },
//     sm: {
//       span: 14,
//       offset: 6
//     }
//   }
// };

var makeField = function makeField(Component) {
  return function (_ref) {
    var input = _ref.input,
        meta = _ref.meta,
        children = _ref.children,
        hasFeedback = _ref.hasFeedback,
        label = _ref.label,
        rest = _objectWithoutProperties(_ref, ["input", "meta", "children", "hasFeedback", "label"]);

    var hasError = meta.touched && meta.invalid;
    return React.createElement(
      _antd.Form.Item,
      _extends({}, formItemLayout, {
        label: label,
        validateStatus: hasError ? "error" : "success",
        hasFeedback: hasFeedback && hasError,
        help: hasError && meta.error
      }),
      React.createElement(Component, _extends({}, input, rest, { children: children }))
    );
  };
};

var AInput = exports.AInput = makeField(_antd.Input);
var ARadioGroup = exports.ARadioGroup = makeField(RadioGroup);
var ASelect = exports.ASelect = makeField(_antd.Select);
var ACheckbox = exports.ACheckbox = makeField(_antd.Checkbox);
var ATextarea = exports.ATextarea = makeField(TextArea);
var ARangePicker = exports.ARangePicker = makeField(RangePicker);
var ADatePicker = exports.ADatePicker = makeField(_antd.DatePicker);
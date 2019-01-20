"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReduxFormAntd = require("./ReduxFormAntd");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _FieldSchemaValidation = require("./FieldSchemaValidation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var dateTimeFormat = "YYYY-MM-DDTHH:mm:ssZ";
var inputFormat = "YYYY-MM-DD HH:mm:ss";

var ADateTimePicker = function ADateTimePicker(_ref) {
  var input = _ref.input,
      rest = _objectWithoutProperties(_ref, ["input"]);

  return _react2.default.createElement(_ReduxFormAntd.ADatePicker, _extends({ showTime: true, format: inputFormat, input: input }, rest));
};

var toDateTimeFormat = function toDateTimeFormat(datetime, previous) {
  if (!datetime) {
    return datetime;
  }
  if (typeof datetime === "string") {
    datetime = (0, _moment2.default)(datetime, inputFormat);
  }
  if (!datetime.isValid()) {
    return previous;
  }
  return datetime.format();
};

var toInputFormat = function toInputFormat(datetime) {
  if (!datetime) {
    return null;
  }
  return (0, _moment2.default)(datetime, dateTimeFormat);
};

var DateTimeWidget = function DateTimeWidget(props) {
  return _react2.default.createElement(_FieldSchemaValidation.FieldSchemaValidation, {
    component: ADateTimePicker,
    label: props.label,
    format: toInputFormat,
    name: props.fieldName,
    required: props.required,
    id: "field-" + props.fieldName,
    placeholder: props.schema.default,
    description: props.schema.description,
    normalize: toDateTimeFormat

  });
};

exports.default = DateTimeWidget;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map3 = require("lodash/map");

var _map4 = _interopRequireDefault(_map3);

var _zipObject3 = require("lodash/zipObject");

var _zipObject4 = _interopRequireDefault(_zipObject3);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReduxFormAntd = require("./ReduxFormAntd");

var _antd = require("antd");

var _liformReact = require("liform-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldValidation = _liformReact.fieldValidation.FieldValidation;
var Option = _antd.Select.Option;


var renderOptions = function renderOptions(field) {
  var options = field.schema.enum;
  var optionNames = field.schema.enum_titles || options;
  var selectOptions = (0, _zipObject4.default)(options, optionNames);

  return (0, _map4.default)(selectOptions, function (name, value) {
    return _react2.default.createElement(
      Option,
      { key: value },
      name
    );
  });
};

var ChoiceWidget = function ChoiceWidget(props) {
  return _react2.default.createElement(
    FieldValidation,
    {
      component: _ReduxFormAntd.ASelect,
      label: props.label,
      name: props.fieldName,
      required: props.required,
      id: "field-" + props.fieldName,
      placeholder: props.schema.default,
      description: props.schema.description,
      schema: props.schema,
      multiple: props.multiple,
      normalize: function normalize(value) {
        return value === undefined ? null : value;
      },
      allowClear: !props.required && !props.multiple
    },
    renderOptions(props)
  );
};

ChoiceWidget.propTypes = {
  schema: _propTypes2.default.object.isRequired,
  fieldName: _propTypes2.default.string,
  label: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  multiple: _propTypes2.default.bool,
  required: _propTypes2.default.bool
};

exports.default = ChoiceWidget;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldSchemaValidation = require("./FieldSchemaValidation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseInputWidget = function BaseInputWidget(props) {
  return _react2.default.createElement(_FieldSchemaValidation.FieldSchemaValidation, {
    component: props.component,
    label: props.label,
    name: props.fieldName,
    required: props.required,
    id: "field-" + props.fieldName,
    placeholder: props.schema.default,
    description: props.schema.description,
    type: props.type,
    normalize: props.normalizer,
    schema: props.schema

  });
};

BaseInputWidget.propTypes = {
  schema: _propTypes2.default.object.isRequired,
  type: _propTypes2.default.string.isRequired,
  required: _propTypes2.default.bool,
  fieldName: _propTypes2.default.string,
  label: _propTypes2.default.string,
  normalizer: _propTypes2.default.func
};

exports.default = BaseInputWidget;
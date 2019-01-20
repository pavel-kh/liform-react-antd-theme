"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReduxFormAntd = require("./ReduxFormAntd");

var _antd = require("antd");

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _antd.Select.Option;


var BooleanWidget = function BooleanWidget(props) {
    return _react2.default.createElement(
        _reduxForm.Field,
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
                if (value === "true") {
                    return true;
                }
                if (value === "false") {
                    return false;
                }
            },
            format: function format(value) {
                if (value === true) {
                    return "true";
                }
                if (value === false) {
                    return "false";
                }
            },
            allowClear: !props.required && !props.multiple
        },
        _react2.default.createElement(
            Option,
            { key: "true" },
            "true"
        ),
        _react2.default.createElement(
            Option,
            { key: "false" },
            "false"
        )
    );
};

BooleanWidget.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    fieldName: _propTypes2.default.string,
    label: _propTypes2.default.string,
    theme: _propTypes2.default.object,
    multiple: _propTypes2.default.bool,
    required: _propTypes2.default.bool
};

exports.default = BooleanWidget;
import React from "react";
import PropTypes from "prop-types";
import { zipObject as _zipObject, map as _map } from "lodash";
import { ASelect } from "./ReduxFormAntd";
import { Select } from "antd";
import { fieldValidation } from "liform-react";
const { FieldValidation } = fieldValidation;
const { Option } = Select;

const renderOptions = field => {
  const options = field.schema.enum;
  const optionNames = field.schema.enum_titles || options;
  const selectOptions = _zipObject(options, optionNames);

  return _map(selectOptions, (name, value) => {
    return (
      <Option key={value}>
        {name}
      </Option>
    );
  });
};

const ChoiceWidget = props => {
  return (
    <FieldValidation
      component={ASelect}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      schema={props.schema}
      multiple={props.multiple}
      normalize={(value) => value === undefined ? null : value}
      allowClear ={!props.required && !props.multiple}
    >
      {renderOptions(props)}
    </FieldValidation>
  );
};

ChoiceWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default ChoiceWidget;

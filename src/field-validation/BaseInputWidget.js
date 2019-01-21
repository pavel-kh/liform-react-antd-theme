import React from "react";
import PropTypes from "prop-types";
import { fieldValidation } from "pavelkh-liform-react";
const { FieldValidation } = fieldValidation;


const BaseInputWidget = props => {
  return (
    <FieldValidation
      component={props.component}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      type={props.type}
      normalize={props.normalizer}
      schema={props.schema}
      
    />
  );
};

BaseInputWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  normalizer: PropTypes.func
};

export default BaseInputWidget;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { fieldValidation } from "pavelkh-liform-react";
import {ATextarea} from "./ReduxFormAntd";

const { FieldValidation } = fieldValidation;


const TextareaWidget = props => {
  return (
    <FieldValidation
      component={ATextarea}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      schema={props.schema}
    />
  );
};

TextareaWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default TextareaWidget;

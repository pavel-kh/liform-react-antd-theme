import React from "react";
import PropTypes from "prop-types";
import { ASelect } from "./ReduxFormAntd";
import { Select } from "antd";
import { Field } from "redux-form";

const { Option } = Select;

const BooleanWidget = props => {
    return (
        <Field
            component={ASelect}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={"field-" + props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            schema={props.schema}
            multiple={props.multiple}
            normalize={
                (value) => {
                    if (value === "true") {
                        return true;
                    }
                    if (value === "false") {
                        return false;
                    }
                }
            }
            format={
                (value) => {
                    if (value === true) {
                        return "true"
                    }
                    if (value === false) {
                        return "false"
                    }
                }
            }
            allowClear={!props.required && !props.multiple}
        >
            <Option key={"true"}>
                true
            </Option>
            <Option key={"false"}>
                false
            </Option>
        </Field>
    );
};

BooleanWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool
};

export default BooleanWidget;

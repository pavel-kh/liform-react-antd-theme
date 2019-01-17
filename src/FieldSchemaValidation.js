import { Field } from "redux-form";
import React, { Component } from "react";
import Ajv from "ajv";

export class FieldSchemaValidation extends Component {
    ajv;
    constructor() {
        super();
        this.validate = this.validate.bind(this);
        this.ajv = new Ajv({
            errorDataPath: "property",
            allErrors: true,
            jsonPointers: false
        });
    }

    validate(value) {
        const valid = this.ajv.validate(this.props.schema, value);
        if (valid) {
            return undefined;
        }else{
            return this.ajv.errors.map(error => error.message).join("\n");
        }

    }
    render() {
        return (
            <Field
                {...this.props}
                validate={this.validate}
            >
                {this.props.children}
            </Field>
        )
    }
}




import { FieldArray } from "redux-form";
import React, { Component } from "react";
import Ajv from "ajv";

export class FieldArraySchemaValidation extends Component {
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
        const schema = {...this.props.schema};
        delete schema.items;
        const valid = this.ajv.validate(schema, value);
        if (valid) {
            return undefined;
        }else{
            return this.ajv.errorsText(this.ajv.errors);
        }

    }
    render() {
        return (
            <FieldArray
                {...this.props}
                validate={this.validate}
            >
                {this.props.children}
            </FieldArray>
        )
    }
}




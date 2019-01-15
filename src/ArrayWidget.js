import React from "react";
import PropTypes from "prop-types";
import { renderField } from "liform-react";
import { FieldArray } from "redux-form";
import { times as _times } from "lodash";
import ChoiceWidget from "./ChoiceWidget";
import classNames from "classnames";
import { Button, Row, Col } from "antd";
import { button } from "./styles";

const renderArrayFields = (
  count,
  schema,
  theme,
  fieldName,
  remove,
  context,
  swap
) => {
  const prefix = fieldName + ".";
  if (count) {    
    return _times(count, idx => {
      return (
        <div key={idx}>
          <Row type="flex" justify="space-between">
            <Col offset={20}>


              {idx !== count - 1 && count > 1 ? (
                <Button style={button} type="primary" icon="arrow-down"
                  onClick={() => {
                    swap(idx, idx + 1);
                  }}
                >
                </Button>
              ) : (
                  ""
                )}
              {idx !== 0 && count > 1 ? (
                <Button style={button} type="primary" icon="arrow-up"
                  onClick={() => {
                    swap(idx, idx - 1);
                  }}
                >
                </Button>
              ) : (
                  ""
                )}

              <Button
                type="danger"
                style={button}
                icon="delete"
                onClick={() => {
                  remove(idx);
                }}
              >
              </Button>
            </Col>
          </Row>
          {renderField(
            { ...schema, showLabel: false },
            idx.toString(),
            theme,
            prefix,
            context
          )}
        </div>
      );
    });
  } else {
    return null;
  }
};

const renderInput = field => {
  const className = classNames([
    "arrayType",
    { "has-error": field.meta.submitFailed && field.meta.error }
  ]);

  return (
    <div className={className}>
      <legend className="control-label">{field.label}</legend>
      {field.meta.submitFailed &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}
      {renderArrayFields(
        field.fields.length,
        field.schema.items,
        field.theme,
        field.fieldName,
        idx => field.fields.remove(idx),
        field.context,
        (a, b) => {
          field.fields.swap(a, b);
        }
      )}
      <Button
        type="primary"
        onClick={() => field.fields.push()}
      >
        Add
      </Button>
      <div className="clearfix" />
    </div>
  );
};

const CollectionWidget = props => {
  return (
    <FieldArray
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      fieldName={props.fieldName}
      schema={props.schema}
      values={props.values}
      theme={props.theme}
      context={props.context}
    />
  );
};

const ArrayWidget = props => {
  // Arrays are tricky because they can be multiselects or collections
  if (
    props.schema.items.hasOwnProperty("enum") &&
    props.schema.hasOwnProperty("uniqueItems") &&
    props.schema.uniqueItems
  ) {
    return ChoiceWidget({
      ...props,
      schema: props.schema.items,
      multiple: true
    });
  } else {
    return CollectionWidget(props);
  }
};

ArrayWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  context: PropTypes.object
};

export default ArrayWidget;

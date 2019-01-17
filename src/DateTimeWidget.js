import React from "react";
import { ADatePicker } from "./ReduxFormAntd";
import moment from "moment";
import { FieldSchemaValidation } from "./FieldSchemaValidation";

const dateTimeFormat = "YYYY-MM-DDTHH:mm:ssZ";
const inputFormat = "YYYY-MM-DD HH:mm:ss";

const ADateTimePicker = ({ input, ...rest }) => {
  return <ADatePicker showTime format={inputFormat} input={input} {...rest} />;
};

const toDateTimeFormat = (datetime, previous) => {
  if (!datetime) {
    return datetime;
  }
  if (typeof datetime === "string") {
    datetime = moment(datetime, inputFormat);
  }
  if (!datetime.isValid()) {
    return previous;
  }
  return datetime.format();
}

const toInputFormat = (datetime) => {
  if (!datetime) {
    return null;
  }
  return moment(datetime, dateTimeFormat);
}


const DateTimeWidget = props => {
  return (

    <FieldSchemaValidation
      component={ADateTimePicker}
      label={props.label}
      format={toInputFormat}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      normalize={toDateTimeFormat}

    />
  );
};




export default DateTimeWidget;

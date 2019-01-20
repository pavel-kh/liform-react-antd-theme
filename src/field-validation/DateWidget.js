import React from "react";
import BaseInputWidget from "./BaseInputWidget";
import {ADatePicker} from "./ReduxFormAntd";
const DateWidget = props => {
  return <BaseInputWidget type="date" component={ADatePicker} {...props} />;
};

export default DateWidget;

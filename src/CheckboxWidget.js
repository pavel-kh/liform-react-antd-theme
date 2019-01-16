import React from "react";
import BaseInputWidget from "./BaseInputWidget";
import { ACheckbox } from "./ReduxFormAntd";

const CheckboxWidget = props => {
  return <BaseInputWidget component={ACheckbox} type="checkbox" {...props } />;
};

export default CheckboxWidget;

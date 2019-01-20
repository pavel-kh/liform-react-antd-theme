import React from "react";
import BaseInputWidget from "./BaseInputWidget";
import { AInput } from "./ReduxFormAntd"

const StringWidget = props => {
  return <BaseInputWidget component={AInput} type="text" {...props} />;
};

export default StringWidget;

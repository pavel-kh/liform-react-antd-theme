import React from "react";
import BaseInputWidget from "./BaseInputWidget";
import {AInput} from "./ReduxFormAntd"

const NumberWidget = props => {
  return <BaseInputWidget component={AInput} type="number" {...props } normalizer={parseFloat} />;
};

export default NumberWidget;

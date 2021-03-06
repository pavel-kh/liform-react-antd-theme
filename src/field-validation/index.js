import { DefaultThemeFieldValidation } from "pavelkh-liform-react";
import StringWidget from "./StringWidget";
import ObjectWidget from "./ObjectWidget";
import DateWidget from "./DateWidget";
import DateTimeWidget from "./DateTimeWidget";
import ArrayWidget from "./ArrayWidget";
import ChoiceWidget from "./ChoiceWidget";
import NumberWidget from "./NumberWidget";
import BooleanWidget from "./BooleanWidget";
import TextareaWidget from "./TextareaWidget";



export default {
  ...DefaultThemeFieldValidation,
  object: ObjectWidget,
  string: StringWidget,
  date: DateWidget,
  datetime: DateTimeWidget,
  array: ArrayWidget,
  choice: ChoiceWidget,
  number: NumberWidget,
  integer: NumberWidget,
  boolean: BooleanWidget,
  textarea: TextareaWidget

};

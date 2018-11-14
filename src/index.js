import { DefaultTheme } from "liform-react";
import StringWidget from "./StringWidget";
import ObjectWidget from "./ObjectWidget";
import DateWidget from "./DateWidget";
import DateTimeWidget from "./DateTimeWidget";
import ArrayWidget from "./ArrayWidget";
import ChoiceWidget from "./ChoiceWidget";


export default {
  ...DefaultTheme,
  object: ObjectWidget,
  string: StringWidget,
  date: DateWidget,
  datetime: DateTimeWidget,
  array: ArrayWidget,
  choice: ChoiceWidget


};

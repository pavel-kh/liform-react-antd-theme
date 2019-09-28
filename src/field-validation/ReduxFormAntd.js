import { Form, Input, Radio, Select, Checkbox, DatePicker } from "antd";
import * as React from "react";

const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    } ,
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 }
    }
  };
  
  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0
  //     },
  //     sm: {
  //       span: 14,
  //       offset: 6
  //     }
  //   }
  // };
  
  const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
          const hasError = meta.touched && meta.invalid;
          return (
            <Form.Item
              {...formItemLayout}
              label={label}
              validateStatus={hasError ? "error" : "success"}
              hasFeedback={hasFeedback && hasError}
              help={hasError && meta.error}
            >
              <Component {...input} {...rest} children={children} />
            </Form.Item>
          );
  };

const AutoResizeTextArea =( props) => <TextArea {...props} autosize={true}>{props.children}</TextArea>;

export const AInput = makeField(Input);
export const ARadioGroup = makeField(RadioGroup);
export const ASelect = makeField(Select);
export const ACheckbox = makeField(Checkbox);
export const ATextarea = makeField(AutoResizeTextArea);
export const ARangePicker = makeField(RangePicker);
export const ADatePicker = makeField(DatePicker);
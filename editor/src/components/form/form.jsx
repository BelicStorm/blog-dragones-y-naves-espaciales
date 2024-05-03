import React from "react";
import { FieldContext } from "./context";
import "./form.css";
import { ImageField, Textarea, SimpleField, Select, MdEditor } from "./fields/";
import templateSelector from "../../models/selectTemplate.mode.json"

const FIELDS = {
  Select: Select,
  KeyText: SimpleField,
  RichText: Textarea,
  RichText2: MdEditor,
  Image: ImageField
};

export default function Form(props) {
  const context = React.useContext(FieldContext);
  const { placeholder, label, options, } = templateSelector

  return (
    <div>
      <header className="flex row flex-nowrap justify-between items-center sticky top-0 z-50 w-[100%] bg-white p-4">
        Mocks editor BETA
      </header>

        <FIELDS.Select
          label={label}
          options={options}
          onChange={context.templateOnChange}
        />
      <h2 className="font-bold p-2">{props.template}</h2>
      <div className="fieldSet">
        {Object.keys(context.form).map((key, i) => {
          const type = context.form[key].config.type;
          const value = context.form[key].value;
          const child = context.form[key]?.child || {};
          const label = context.form[key].config.props.label;
          const options = context.form[key].config.props.options;
          const Field = FIELDS[type];
          return (
            <Field
              label={label}
              child={child}
              key={key + i}
              value={value}
              options={options}
              onChange={context.onChange}
              onRichTextUpdate={context.onRichTextUpdate}
              onChangeImage={context.onChangeImage}
              name={key}
            />
          );
        })}
      </div>
    </div>
  );
}

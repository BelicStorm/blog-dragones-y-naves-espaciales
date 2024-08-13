import React from "react";
import { FieldContext } from "./context";
import "./form.css";
import FIELDS from "./fields/";
import templateSelector from "../../models/selectTemplate.mode.json"



export default function Form(props) {
  const context = React.useContext(FieldContext);
  const { placeholder, label, options, } = templateSelector

  const makeForm = (contextForm) => {
    return Object.keys(contextForm).map((key, i) => {
      const type = contextForm[key]?.config?.type;
      const items = contextForm[key].items
      const enabled = contextForm[key].enabled ?? true
      const Field = type !== undefined && FIELDS[type];
      const props = {
        onChange:context.onChange,
        onRichTextUpdate:context.onRichTextUpdate,
        onChangeImage:context.onChangeImage,
        onFormEnables:context.onFormEnables,
        fieldContent:contextForm[key],
        key:key + i,
        name:key,
        enabled:contextForm[key].config.enabled
      }

      const createSubFields = (contextForm)=>{
        const [from,Component] = key.split("-")
        const isSelected = contextForm[from].value.split("-").includes(Component)
        const SubType = contextForm[key]?.config?.subType
        const SubField = FIELDS[SubType]
        const isFatherEnabled = contextForm[key].enabled
        return isSelected && isFatherEnabled ? <SubField {...props}/> :""
      }
      return (
        <>
          {enabled && !["itemGroup", "enumItems"].includes(type) && <Field {...props}/> }
          {["enumItems"].includes(type) ? createSubFields(contextForm):""}
          {items ? makeForm(items) : ""}
        </>
      );
    })
  }

  return (
    <div>
      <header className="flex row flex-nowrap justify-between items-center sticky top-0 z-50 w-[100%] bg-white p-4">
        Mocks editor BETA
      </header>

      <FIELDS.Select label={label} options={options} onChange={context.templateOnChange} />
      <h2 className="font-bold p-2">{props.template}</h2>

      <div className="fieldSet">
        {makeForm(context.form)}
      </div>
    </div>
  );
}

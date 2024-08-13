import React from "react";

export const FieldContext = React.createContext({
  form: {},
  onChange: {},
  templateOnChange:{},
  addField: {},
  onRichTextUpdate: {},
  onChangeImage: {}
});

export function FieldContextProvider(props) {
  const value = React.useMemo(
    () => ({
      form: props.form,
      onChange: props.onChange,
      addField: props.addField,
      onRichTextUpdate: props.onRichTextUpdate,
      onChangeImage: props.onChangeImage,
      templateOnChange: props.templateOnChange,
      onFormEnables: props.onFormEnables
    }),
    [props]
  );

  return (
    <FieldContext.Provider value={value}>
      {props.children}
    </FieldContext.Provider>
  );
}

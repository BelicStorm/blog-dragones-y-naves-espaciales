import { produce } from "immer";
import React, { useRef, useEffect, useState } from "react";
import { FieldContextProvider } from "./components/form/context";
import Form from "./components/form/form";
import FakeSlice from "./components/slice/fakeSlice";
import "./styles.css";
import templates from "./models"

export default function App() {
  const [template, setTemplate] = React.useState("CTA")
  const [fieldState, setFieldState] = React.useState(templates[template]);

  const onAddAfield = (payload, id) => {
    setFieldState(
      produce((draft) => {
        draft[id] = { ...payload };
      })
    );
  };

  const onFieldChange = React.useCallback((event) => {
    event.preventDefault();
    setFieldState(
      produce((draft) => {
        draft[event.target.name].value = event.target.value;
      })
    );
  }, []);

  const templateOnChange = React.useCallback((event) => {
    event.preventDefault();
    setTemplate(event.target.value)
    setFieldState(
      produce((draft) => templates[event.target.value])
    );
  }, []);

  useEffect(() => {
    console.log("mounted");

    return () => console.log("unmounting... clean up here");
  });

  const onChangeImage = React.useCallback(({ name, src }) => {
    setFieldState(
      produce((draft) => {
        draft[name].value = src;
      })
    );
  }, []);

  const onRichTextUpdate = React.useCallback(({ name, value }) => {
    console.log(name, value)
    setFieldState(
      produce((draft) => {
        draft[name].value = value;
      })
    );
  }, []);

  const ref = useRef(null);



  return (
    <FieldContextProvider
      templateOnChange={templateOnChange}
      form={fieldState}
      onChange={onFieldChange}
      addField={onAddAfield}
      onRichTextUpdate={onRichTextUpdate}
      onChangeImage={onChangeImage}
    >
      <div className="wrap">
        <div className="leftView">
          <FakeSlice template={template} />
        </div>

        <div ref={ref} data-expand={true} className="sidebar">
          <Form template={template} />
        </div>
      </div>
    </FieldContextProvider>
  );
}
//  <Form />
//<FakeSlice />

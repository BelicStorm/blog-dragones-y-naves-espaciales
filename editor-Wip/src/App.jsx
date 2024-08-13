import { produce } from "immer";
import React, { useRef, useEffect, useState } from "react";
import { FieldContextProvider } from "./components/form/context";
import Form from "./components/form/form";
import FakeSlice from "./components/slice/fakeSlice";
import "./styles.css";
import templates from "./models"

export default function App() {
  const [template, setTemplate] = React.useState("Blog")
  const [fieldState, setFieldState] = React.useState(templates[template]);

  // const onAddAfield = (payload, id) => {
  //   setFieldState(
  //     produce((draft) => {
  //       draft[id] = { ...payload };
  //     })
  //   );
  // };

  const onFieldChange = React.useCallback((e, map) => {
    e.preventDefault();
    setFieldState(
      produce((draft) => {
        if (map) {
          const route = map.split("/")
          const side = route[0]
          const elementGroup = route[1]
          draft[side].items[elementGroup].items[e.target.name].value= e.target.value
        }else{
          draft[e.target.name].value = e.target.value;
        }
        
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

  const onFormEnables = React.useCallback((e, map) => {
    const isVisible = e[2].target.checked
    const side = e[1]
    const element = e[0]
    console.log(e);
    setFieldState(
      produce((draft) => {
        const keys = Object.keys(draft[side].items[element].items)
        keys.map((key)=>{
          draft[side].items[element].items[key].enabled= isVisible
        })
      })
    );
  }, []);

  useEffect(() => {
    console.log("mounted");

    return () => console.log("unmounting... clean up here");
  });

  const onChangeImage = React.useCallback(({ name, src }, map) => {
    setFieldState(
      produce((draft) => {
        console.log(map);
        if (map) {
          const route = map.split("/")
          const side = route[0]
          const elementGroup = route[1]
          draft[side].items[elementGroup].items[name].value= src
        }else{
          draft[name].value = src;
        }
      })
    );
  }, []);

  const onRichTextUpdate = React.useCallback(({ name, value }, map) => {
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
      onFormEnables={onFormEnables}
      onChange={onFieldChange}
      // addField={onAddAfield}
      onRichTextUpdate={onRichTextUpdate}
      onChangeImage={onChangeImage}
    >
      <div className="wrap">
        <div className="leftView" style={{overflow:"scroll"}}>
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

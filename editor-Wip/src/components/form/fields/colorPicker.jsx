import React from "react";
import "./simpleField.css";

export default function ColorPicker(props) {
  const { name, fieldContent, onChange } = props
  const label = props.label ?? fieldContent?.config.label
  const value = props.value ?? fieldContent?.value
  const map = fieldContent?.config?.map

  return (
    <div className="field-container">
      <label>{label}</label>
      <input
        name={name}
        type="color"
        onChange={(e)=>onChange(e,map)}
        value={value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

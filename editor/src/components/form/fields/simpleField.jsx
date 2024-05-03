import React from "react";
import "./simpleField.css";

export default function Field(props) {
  const { name, fieldContent, onChange } = props
  const label = props.label ?? fieldContent?.config.label
  const value = props.value ?? fieldContent?.value
  console.log(props)
  return (
    <div className="field-container">
      <label>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

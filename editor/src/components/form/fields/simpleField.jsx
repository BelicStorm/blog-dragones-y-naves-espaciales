import React from "react";
import "./simpleField.css";

export default function Field(props) {
  return (
    <div className="field-container">
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

import "./selectField.css";
import React from "react"
export default function Select(props) {

  return (
    <div className="field-container">
      <label>{props.label}</label>
      <select
        className="selectField"
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      >
        <option value="" disabled>
          Select an option
        </option>
        {
          props.options.map((e)=>{
            return <option value={e.option}>{e.label}</option>
          })
        }
      </select>
    </div>
  );
}

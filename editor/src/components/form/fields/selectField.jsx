import "./selectField.css";
import React from "react"
export default function Select(props) {
  const { name, onChange,fieldContent, options:propsOptions, label:propsLabel } = props

  const filledOptions = propsOptions ?? fieldContent?.config.props.options
  const label = propsLabel ?? fieldContent?.config.props.label

  return (
    <div className="field-container">
      <label>{label}</label>
      <select
        className="selectField"
        name={name}
        onChange={onChange}
        value={fieldContent?.value}
      >
        <option value="" disabled>
          Select an option
        </option>
        {
          filledOptions.map((e)=>{
            return <option value={e.option} key={e.label}>{e.label}</option>
          })
        }
      </select>
    </div>
  );
}

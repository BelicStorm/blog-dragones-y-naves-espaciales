import React from "react";
import Slash from "../../slash";
//import BubbleMenu from "../../bubble-menu/bubble-menu";
import "./simpleField.css";

export default function Textarea(props) {
  return (
    <div className="field-container">
      <label>{props.label}</label>
      <textarea
        //onSelect={(e) => console.log(e.target.selectionStart, e)}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder="Placeholder ..."
      />
    </div>
  );
}

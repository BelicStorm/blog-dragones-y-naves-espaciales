import React from "react";
import "./simpleField.css";
import { Switch } from "@mui/material";


export default function CheckBox(props) {
    const { name, fieldContent, onFormEnables } = props
    const label = props.label ?? fieldContent?.config.label
    const map = fieldContent?.config?.map
    return (
        <div className="field-container">
            <label>{label}-{name}</label>
            <Switch name={name} defaultChecked={props.enabled} onChange={(e) => onFormEnables([name, label, e],map)} />
        </div>
    );
}

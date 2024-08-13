import React from "react";
import Templates from "../templates"

export default function FakeSlice(props) {
  console.log(props, Templates, "slice")
  const Slice = Templates[props.template]

  return (
    <Slice/>
  );
}

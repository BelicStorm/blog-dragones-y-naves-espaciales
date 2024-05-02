import React from "react";
import Templates from "../templates"

export default function FakeSlice(props) {
  const Slice = Templates[props.template]

  return (
    <Slice/>
  );
}

import React from "react";
import * as InputStyles from "../styles/InputStyles";

export default function Checkbox({ id, name, label }) {
  return (
    <InputStyles.CheckboxLabel htmlFor={id}>
      <InputStyles.Checkbox type="checkbox" id={id} name={name} />
      <p children={label} />
    </InputStyles.CheckboxLabel>
  );
}

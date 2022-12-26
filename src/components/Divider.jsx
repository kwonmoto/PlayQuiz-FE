import React from "react";
import * as DividerStyles from "../styles/DividerStyles";

export default function Divider({ children }) {
  return (
    <DividerStyles.DividerContainer>
      <DividerStyles.DividerBorder />
      <DividerStyles.DividerContent children={children} />
      <DividerStyles.DividerBorder />
    </DividerStyles.DividerContainer>
  );
}

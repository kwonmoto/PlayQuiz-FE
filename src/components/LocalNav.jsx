import React from "react";
import * as ButtonStyles from "../styles/ButtonStyles";

export default function LocalNav({ list }) {
  return (
    <ButtonStyles.LocalNavLayout>
      {list.map((d, i) => (
        <React.Fragment key={d.label}>
          <ButtonStyles.Link children={d.label} onClick={d.callbackFn} />
          <span>{i !== list.length - 1 ? " | " : ""}</span>
        </React.Fragment>
      ))}
    </ButtonStyles.LocalNavLayout>
  );
}

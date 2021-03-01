import React from "react";

import { Size } from "@common/enums/size";
import { NormalButton } from "..";

export default { title: "Basic/Button" };

export const Normal = () => {
  return (
    <>
      <h3>SMALL</h3>
      <NormalButton size={Size.SMALL} style={{ marginBottom: "2rem" }}>
        small
      </NormalButton>
      <h3>MEDIUM</h3>
      <NormalButton size={Size.MEDIUM} style={{ marginBottom: "2rem" }}>
        medium
      </NormalButton>
      <h3>LARGE</h3>
      <NormalButton size={Size.LARGE} style={{ marginBottom: "2rem" }}>
        large
      </NormalButton>
    </>
  );
};

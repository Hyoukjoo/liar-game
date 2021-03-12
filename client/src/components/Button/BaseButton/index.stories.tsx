import React from "react";

import { Size } from "@common/enums/size";
import { BaseButton } from "..";

export default { title: "Basic/Button" };

export const Normal = () => {
  return (
    <>
      <h3>SMALL</h3>
      <BaseButton size={Size.SMALL} style={{ marginBottom: "2rem" }}>
        small
      </BaseButton>
      <h3>MEDIUM</h3>
      <BaseButton size={Size.MEDIUM} style={{ marginBottom: "2rem" }}>
        medium
      </BaseButton>
      <h3>LARGE</h3>
      <BaseButton size={Size.LARGE} style={{ marginBottom: "2rem" }}>
        large
      </BaseButton>
    </>
  );
};

import React from "react";
import { select } from "@storybook/addon-knobs";

import { BaseButton } from ".";
import { Size } from "@common/enums/size";
import Story from "@common/styles/storybook";

export default { title: "Atom/Button" };

export const Base = () => {
  return (
    <Story.GlassLayout>
      <BaseButton
        size={select("size", Size, Size.MEDIUM)}
        style={{ marginBottom: "2rem" }}
      >
        Base Button
      </BaseButton>
    </Story.GlassLayout>
  );
};

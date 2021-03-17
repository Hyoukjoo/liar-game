import { FC } from "react";

import Story from "@common/styles/storybook";
import { BaseInput, TextInput } from ".";

export default {
  title: "Atom/Input",
};

export const Base: FC = () => {
  return (
    <Story.GlassLayout>
      <BaseInput />
    </Story.GlassLayout>
  );
};

export const Text: FC = () => {
  return (
    <Story.GlassLayout>
      <TextInput />
    </Story.GlassLayout>
  );
};

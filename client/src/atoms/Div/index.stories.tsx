import { CSSProperties, FC } from "react";

import Story from "@common/styles/storybook";
import { BaseDiv, GlassDiv } from ".";
import { white } from "@common/styles/color";

export default {
  title: "Atom/Div",
};

const style: CSSProperties = {
  position: "absolute",
  left: "50%",
  top: "50%",
  width: "80%",
  height: "80%",
  transform: "translate(-50%, -50%)",
};

export const Base: FC = () => {
  return (
    <Story.GlassLayout>
      <BaseDiv style={{ ...style, border: `1px solid ${white}` }}></BaseDiv>
    </Story.GlassLayout>
  );
};

export const Glass: FC = () => {
  return (
    <Story.GlassLayout style={{ position: "relative" }}>
      <GlassDiv style={style}></GlassDiv>
    </Story.GlassLayout>
  );
};

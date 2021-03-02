import { ButtonHTMLAttributes, ComponentType, FC } from "react";

import Style from "./style";
import Icon from "@components/Icon";
import { SvgProps } from "@components/Icon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Svg: ComponentType<SvgProps>;
  width?: string;
  height?: string;
  color?: string;
}

const IconButton: FC<Props> = ({ Svg, width, height, color, ...props }) => {
  return (
    <Style.Button {...props}>
      <Icon
        className='icon'
        SVG={Svg}
        width={width}
        height={height}
        color={color}
      />
    </Style.Button>
  );
};

export default IconButton;

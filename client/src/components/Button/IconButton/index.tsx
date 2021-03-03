import { ButtonHTMLAttributes, ComponentType, FC } from "react";

import Style from "./style";
import Icon from "@components/Icon/Component";
import { SvgProps } from "@components/Icon/Component";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Svg: ComponentType<SvgProps>;
  width?: string;
  height?: string;
  color?: string;
}

const IconButton: FC<Props> = ({
  Svg,
  width = "24px",
  height = "24px",
  color,
  ...props
}) => {
  return (
    <Style.Button width={width} height={height} {...props}>
      <Icon
        className='icon'
        Svg={Svg}
        width={width}
        height={height}
        color={color}
      />
    </Style.Button>
  );
};

export default IconButton;

import { ComponentType, FC } from "react";

interface SvgProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

interface Props extends SvgProps {
  SVG: ComponentType<SvgProps>;
  color?: string;
}

const Icon: FC<Props> = ({ SVG, className, width, height, color, fill }) => {
  return (
    <SVG
      className={className}
      width={width}
      height={height}
      fill={fill || color}
    />
  );
};

export default Icon;

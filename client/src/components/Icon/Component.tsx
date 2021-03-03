import { ComponentType, FC } from "react";

export interface SvgProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

interface Props extends SvgProps {
  Svg: ComponentType<SvgProps>;
  color?: string;
}

const Icon: FC<Props> = ({
  Svg,
  className,
  width = "24px",
  height = "24px",
  color,
  fill,
}) => {
  return (
    <Svg
      className={className}
      width={width}
      height={height}
      fill={fill || color}
    />
  );
};

export default Icon;

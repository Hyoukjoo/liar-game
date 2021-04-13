import { ComponentType, FC } from 'react';

export interface SvgProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

export type SvgComponent = ComponentType<SvgProps>;

interface IconProps extends SvgProps {
  Svg: SvgComponent;
  color?: string;
}

const Icon: FC<IconProps> = ({
  Svg,
  className,
  width = '24px',
  height = '24px',
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

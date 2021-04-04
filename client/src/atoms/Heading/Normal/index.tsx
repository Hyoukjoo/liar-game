import styled from '@emotion/styled';
import { FC, HTMLAttributes } from 'react';

import Style from './style';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  Title: any;
}

export const H1: FC<Props> = ({ children, ...props }) => (
  <Style.H1Base {...props}>{children}</Style.H1Base>
);

export const H2: FC<Props> = ({ children, ...props }) => (
  <Style.H2Base {...props}>{children}</Style.H2Base>
);

export const H3: FC<Props> = ({ children, ...props }) => (
  <Style.H3Base {...props}>{children}</Style.H3Base>
);

export const H4: FC<Props> = ({ children, ...props }) => (
  <Style.H4Base {...props}>{children}</Style.H4Base>
);

export const H5: FC<Props> = ({ children, ...props }) => (
  <Style.H5Base {...props}>{children}</Style.H5Base>
);

export const H6: FC<Props> = ({ children, ...props }) => (
  <Style.H6Base {...props}>{children}</Style.H6Base>
);

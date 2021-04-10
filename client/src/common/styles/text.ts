import { css } from '@emotion/react';

export const getSingleEllipsisStyle = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const getMulipleEllipsisStyle = (
  line: number = 2,
  height: number = 16
) => css`
  height: ${height}px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;

import styled from '@emotion/styled';

import { GlassItem } from '@atoms/Item';
import { getSingleEllipsisStyle } from '@common/styles/text';

namespace RoomItemStyle {
  export const Item = styled(GlassItem)`
    display: grid;
    grid-template-columns: auto 34px;
    align-items: center;
    padding: 0 20px;
    height: 50px;
  `;

  export const LeftSide = styled.div`
    width: 100%;
    overflow: hidden;
  `;

  export const RoomName = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 5px;

    ${getSingleEllipsisStyle}
  `;

  export const OwnerName = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
  `;
}

export default RoomItemStyle;

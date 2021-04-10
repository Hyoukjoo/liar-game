import styled from '@emotion/styled';

import BaseLabel from '../BaseLabel';
import { getSingleEllipsisStyle } from '@common/styles/text';

namespace EllipsisLabelStyle {
  export const Label = styled(BaseLabel)`
    ${getSingleEllipsisStyle}
  `;
}

export default EllipsisLabelStyle;

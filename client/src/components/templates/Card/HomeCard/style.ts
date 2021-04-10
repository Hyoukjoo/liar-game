import styled from '@emotion/styled';

import { white } from '@common/styles/color';

namespace HomeCardStyle {
  export const NickName = styled.p`
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${white};
    text-align: center;
  `;

  export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > button:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `;
}

export default HomeCardStyle;

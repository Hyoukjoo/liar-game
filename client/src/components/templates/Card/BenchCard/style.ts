import styled from '@emotion/styled';

namespace BenchCardStyle {
  export const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 20px;
  `;

  export const DetailName = styled.p`
    margin-bottom: 5px;
    text-align: center;
  `;

  export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
}

export default BenchCardStyle;

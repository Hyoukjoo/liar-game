import styled from '@emotion/styled';

import { GlassSection } from '@atoms/Section';

namespace SignUpFormStyle {
  export const Section = styled(GlassSection)``;

  export const Form = styled.form`
    & > input {
      margin-bottom: 20px;
    }
  `;

  export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
}

export default SignUpFormStyle;

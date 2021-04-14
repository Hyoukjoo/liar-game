import styled from '@emotion/styled';

import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import { BaseInput } from '@atoms/Input';
import { InputSize } from '@atoms/Input/_constant/InputSize';
import { IconButton } from '@molecules/Button';

namespace SearchInputStyle {
  export const Container = styled.div`
    ${getGlassMorphismStyle};
    display: grid;
    grid-template-columns: auto 52px;
    align-items: center;
    width: 100%;
    height: ${InputSize.MEDIUM.height};
    border-radius: 100px;
  `;

  export const Input = styled(BaseInput)`
    height: 100%;
    min-width: 170px;
    padding-left: 20px;
  `;

  export const SearchIconButton = styled(IconButton)`
    margin-top: -2px;
  `;
}

export default SearchInputStyle;

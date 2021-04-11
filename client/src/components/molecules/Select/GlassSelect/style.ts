import styled from '@emotion/styled';

import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import { getWhiteOpacity } from '@common/styles/opacity';
import { zIndex1 } from '@common/styles/zIndex';

interface GlassSelectStyleProps {
  isOpen?: boolean;
}

const SelectWidth = '100%';

namespace GlassSelectStyle {
  export const SelectWrapper = styled.div`
    position: relative;
  `;

  export const Select = styled.div<GlassSelectStyleProps>`
    ${getGlassMorphismStyle};
    position: relative;
    display: grid;
    align-items: center;
    padding: 10px 30px 10px 15px;
    width: ${SelectWidth};
    height: 50px;

    &::after {
      position: absolute;
      top: 50%;
      right: 5px;
      content: '';
      width: 10px;
      height: 10px;
      background-color: ${getWhiteOpacity(75)};
      clip-path: ${(props) =>
        props.isOpen
          ? 'polygon(0% 100%, 50% 0%, 100% 100%)'
          : 'polygon(0% 0%, 50% 100%, 100% 0%)'};
      transform: translate(-50%, -50%);
    }
  `;

  export const OptionBox = styled.ul<GlassSelectStyleProps>`
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    position: absolute;
    top: 60px;
    left: 0;
    width: ${SelectWidth};
    max-height: 175px;
    overflow-y: scroll;
    list-style: none;
    ${getGlassMorphismStyle};
    z-index: ${zIndex1};
  `;
}

export default GlassSelectStyle;

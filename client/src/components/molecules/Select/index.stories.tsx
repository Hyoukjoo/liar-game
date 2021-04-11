import { useState } from 'react';
import styled from '@emotion/styled';

import GlassOption from './GlassOption';
import GlassSelect from './GlassSelect';

export default {
  title: 'MOLECULE/SELECT',
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
`;

export const Glass_Select = () => {
  const [value, setValue] = useState('호랑이');

  const onSelect = (value: any) => {
    setValue(value);
  };

  return (
    <Layout>
      <GlassSelect onSelect={onSelect}>
        <GlassOption value='호랑이' isSelected={value === '호랑이'}>
          호랑이
        </GlassOption>
        <GlassOption value='사자' isSelected={value === '사자'}>
          사자
        </GlassOption>
        <GlassOption value='고양이' isSelected={value === '고양이'}>
          고양이
        </GlassOption>
        <GlassOption value='개' isSelected={value === '개'}>
          개
        </GlassOption>
        <GlassOption value='여우' isSelected={value === '여우'}>
          여우
        </GlassOption>
      </GlassSelect>
    </Layout>
  );
};

import { BaseList, GlassList } from '.';
import { BaseItem, GlassItem } from '@atoms/Item';
import GlassSection from '@atoms/Section/GlassSection';

export default {
  title: 'ATOM/LIST&ITEM',
};

export const Base_List = () => {
  return (
    <GlassSection>
      <BaseList>
        <BaseItem>1</BaseItem>
        <BaseItem>2</BaseItem>
        <BaseItem>3</BaseItem>
        <BaseItem>4</BaseItem>
      </BaseList>
    </GlassSection>
  );
};

export const Glass_List = () => {
  return (
    <GlassSection>
      <GlassList>
        <GlassItem>1</GlassItem>
        <GlassItem>2</GlassItem>
        <GlassItem>3</GlassItem>
        <GlassItem>4</GlassItem>
      </GlassList>
    </GlassSection>
  );
};

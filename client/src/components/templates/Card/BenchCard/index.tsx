import { FC, useState } from 'react';

import Style from './style';
import { GlassButton } from '@atoms/Button';
import { GlassSection } from '@atoms/Section';
import { CategorySelect } from '@organisms/Select';
import { EntryList } from '@organisms/List';
import CategoryModel from '@models/CategoryModel';
import UserModel from '@models/UserModel';

export interface BenchCardProps {
  entries: UserModel[];
  categories: CategoryModel[];
  startGame: (categoryId: number) => void;
}

const BenchCard: FC<BenchCardProps> = ({ categories, entries, startGame }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );

  const onSelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const onClickStartButton = () => {
    startGame(selectedCategoryId);
  };

  return (
    <GlassSection>
      <Style.DetailBox>
        <Style.DetailName>카테고리</Style.DetailName>
        <CategorySelect
          onSelect={onSelect}
          categories={categories}
          selectedCategoryId={selectedCategoryId}
        />
      </Style.DetailBox>
      <Style.DetailBox>
        <Style.DetailName>참가자</Style.DetailName>
        <EntryList entries={entries} />
      </Style.DetailBox>
      <Style.ButtonWrapper>
        <GlassButton onClick={onClickStartButton}>START</GlassButton>
      </Style.ButtonWrapper>
    </GlassSection>
  );
};

export default BenchCard;

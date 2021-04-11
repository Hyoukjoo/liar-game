import { useState } from 'react';

import { CategorySelect } from '.';
import { CATEGORIES } from '@common/mocks/category';

export default {
  title: 'ORGANISM/SELECT',
};

export const Category_Select = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    CATEGORIES[0].id
  );

  const onSelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <CategorySelect
      selectedCategoryId={selectedCategoryId}
      onSelect={onSelect}
      categories={CATEGORIES}
    />
  );
};

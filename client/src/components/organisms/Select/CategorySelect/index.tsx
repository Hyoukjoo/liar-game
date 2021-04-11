import { FC } from 'react';

import { GlassSelect, GlassOption } from '@molecules/Select';
import CategoryModel from '@models/CategoryModel';

export interface CategorySelectProps {
  categories: CategoryModel[];
  onSelect: (categoryId: number) => void;
  selectedCategoryId: number;
}

const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  onSelect,
  selectedCategoryId,
}) => {
  return (
    <GlassSelect onSelect={onSelect}>
      {categories.map((category) => (
        <GlassOption
          key={category.id}
          value={category.id}
          isSelected={category.id === selectedCategoryId}
        >
          {category.name}
        </GlassOption>
      ))}
    </GlassSelect>
  );
};

export default CategorySelect;

import { FC, useState, KeyboardEvent } from 'react';

import Style from './style';
import SvgSearch from '@atoms/Icon/Search';

export interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  isResetAfterSearch?: boolean;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  onSearch,
  isResetAfterSearch,
  ...props
}) => {
  const [value, setValue] = useState('');

  const onClickSearchButton = () => {
    onSearch(value);

    if (isResetAfterSearch) {
      setValue('');
    }
  };

  const onKeyUpSearchInput = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === 'Enter') {
      onClickSearchButton();
    }
  };

  return (
    <Style.Container {...props}>
      <Style.Input
        placeholder={placeholder}
        value={value}
        onChangeValue={setValue}
        onKeyUp={onKeyUpSearchInput}
      />
      <Style.SearchIconButton
        Svg={SvgSearch}
        isTransparent
        onClick={onClickSearchButton}
      />
    </Style.Container>
  );
};

export default SearchInput;

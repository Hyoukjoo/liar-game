import styled from '@emotion/styled';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SearchInput, ValidateInput } from '.';
import { GlassButton } from '@atoms/Button';
import useValidationForm from '@hooks/useValidateForm';

export default {
  title: 'MOLECULE/INPUT',
};

const Container = styled.div`
  display: grid;
  align-items: center;
  width: 375px;

  & > button {
    justify-self: center;
  }
`;

export const Validate_Input = () => {
  const regex = new RegExp(`^.*(?=^.{8,15}$)(?=.*[a-zA-Z0-9]).*$`);

  const validateFunction = (value: string = '') => {
    return regex.test(value);
  };

  const { value, editValue, validate, validity } = useValidationForm(
    validateFunction
  );

  const onClickValidateButton = () => {
    validate();
  };

  return (
    <Container>
      <ValidateInput
        placeholder='영어, 숫자 조합 8자 이상 15자 이하'
        value={value || ''}
        onChangeValue={editValue}
        validity={validity}
        message={text('실패 메세지', '영문, 숫자 8자 이상 15자 이하')}
      />
      <GlassButton onClick={onClickValidateButton}>Validate</GlassButton>
    </Container>
  );
};

export const Search_Input = () => {
  return (
    <SearchInput
      onSearch={action('click search button')}
      isResetAfterSearch={boolean('clear after search', false)}
    />
  );
};

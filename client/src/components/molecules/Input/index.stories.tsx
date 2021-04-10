import styled from '@emotion/styled';
import { text } from '@storybook/addon-knobs';

import ValidateInput from './ValidateInput';
import useValidationForm from '@hooks/useValidateForm';
import { BaseButton } from '@atoms/Button';

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
      <BaseButton onClick={onClickValidateButton}>Validate</BaseButton>
    </Container>
  );
};

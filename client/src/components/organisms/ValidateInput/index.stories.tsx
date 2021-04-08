import { useRef } from 'react';
import styled from '@emotion/styled';

import { EmailInput, NicknameInput, PasswordInput, RoomNameInput } from '.';
import { ValidateInputRef } from './constant';
import { BaseButton } from '@atoms/Button';

export default {
  title: 'ORGANISM/VALIDATE INPUT',
};

const Container = styled.div`
  display: grid;
  align-items: center;
  width: 375px;

  & > button {
    justify-self: center;
  }
`;

export const Email_Input = () => {
  const inputRef = useRef<ValidateInputRef>(null);

  const onClickValidateButton = () => {
    inputRef.current.validate();
  };

  return (
    <Container>
      <EmailInput ref={inputRef} />
      <BaseButton onClick={onClickValidateButton}>Validate</BaseButton>
    </Container>
  );
};

export const Password_Input = () => {
  const inputRef = useRef<ValidateInputRef>(null);

  const onClickValidateButton = () => {
    inputRef.current.validate();
  };

  return (
    <Container>
      <PasswordInput ref={inputRef} />
      <BaseButton onClick={onClickValidateButton}>Validate</BaseButton>
    </Container>
  );
};

export const Nickname_Input = () => {
  const inputRef = useRef<ValidateInputRef>(null);

  const onClickValidateButton = () => {
    inputRef.current.validate();
  };

  return (
    <Container>
      <NicknameInput ref={inputRef} />
      <BaseButton onClick={onClickValidateButton}>Validate</BaseButton>
    </Container>
  );
};

export const Room_Name_Input = () => {
  const inputRef = useRef<ValidateInputRef>(null);

  const onClickValidateButton = () => {
    inputRef.current.validate();
  };

  return (
    <Container>
      <RoomNameInput ref={inputRef} />
      <BaseButton onClick={onClickValidateButton}>Validate</BaseButton>
    </Container>
  );
};

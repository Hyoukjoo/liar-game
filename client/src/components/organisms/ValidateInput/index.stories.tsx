import { useRef } from 'react';
import styled from '@emotion/styled';

import { EmailInput, NicknameInput, PasswordInput, RoomNameInput } from '.';
import { ValidateInputRef } from './constant';
import { GlassButton } from '@atoms/Button';

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
      <GlassButton onClick={onClickValidateButton}>Validate</GlassButton>
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
      <GlassButton onClick={onClickValidateButton}>Validate</GlassButton>
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
      <GlassButton onClick={onClickValidateButton}>Validate</GlassButton>
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
      <GlassButton onClick={onClickValidateButton}>Validate</GlassButton>
    </Container>
  );
};

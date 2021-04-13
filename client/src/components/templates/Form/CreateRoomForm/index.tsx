import { FC, useRef, MouseEvent } from 'react';

import Style from './style';
import { GlassButton } from '@atoms/Button';
import { GlassSection } from '@atoms/Section';
import { RoomNameInput } from '@organisms/ValidateInput';
import { ValidateInputRef } from '@organisms/ValidateInput/constant';

interface CreateRoomFormProps {
  createRoom: (roomName: string) => void;
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({ createRoom }) => {
  const inputRef = useRef<ValidateInputRef>(null);

  const onClickCreateButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputRef.current.validate()) {
      createRoom(inputRef.current.value);
    }
  };

  return (
    <GlassSection>
      <Style.Form>
        <RoomNameInput ref={inputRef} />
        <Style.ButtonWrapper>
          <GlassButton type='submit' onClick={onClickCreateButton}>
            Create
          </GlassButton>
        </Style.ButtonWrapper>
      </Style.Form>
    </GlassSection>
  );
};

export default CreateRoomForm;

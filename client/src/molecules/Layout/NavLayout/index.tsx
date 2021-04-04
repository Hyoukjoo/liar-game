import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { Title } from '@atoms/Heading';
import { IconButton } from '@atoms/Button';
import { LeftArrow } from '@atoms/Icon';

interface Props {
  title?: string;
  onClickBackIcon?: () => void;
}

const NavLayout: FC<Props> = ({
  children,
  title = '',
  onClickBackIcon,
  ...props
}) => {
  const router = useRouter();

  const onClickLeftArrowIcon = () => {
    if (!onClickBackIcon) {
      router.back();
    } else {
      onClickBackIcon();
    }
  };

  return (
    <Style.Layout {...props}>
      <Style.Nav>
        <Style.NavLeftSide>
          <IconButton
            Svg={LeftArrow}
            onClick={onClickLeftArrowIcon}
            width='24px'
            height='24px'
          />
        </Style.NavLeftSide>
        <Title>{title}</Title>
        <div></div>
      </Style.Nav>
      <Style.Body>{children}</Style.Body>
    </Style.Layout>
  );
};

export default NavLayout;

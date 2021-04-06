import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import { BaseLayout } from '..';
import Style from './style';
import { LeftArrow } from '@atoms/Icon';
import TripleAreaHeader from '@molecules/Header/TripleAreaHeader';

interface Props {
  title: string;
  onClickBackIcon?: () => void;
}

const HeaderLayout: FC<Props> = ({
  title,
  onClickBackIcon = null,
  children,
  ...props
}) => {
  const router = useRouter();

  const onClickLeftSideIcon = () => {
    if (onClickBackIcon === null) {
      router.back();
    } else {
      onClickBackIcon();
    }
  };
  return (
    <BaseLayout {...props}>
      <TripleAreaHeader
        title={title}
        leftSideIcon={LeftArrow}
        onClickLeftSideIcon={onClickLeftSideIcon}
      />
      <Style.Body>{children}</Style.Body>
    </BaseLayout>
  );
};

export default HeaderLayout;

import Icon from "@atoms/Icon/Component";
import { Crown } from "@atoms/Icon";
import { FC } from "react";

import Style from "./style";

interface Props {
  entryName: string;
  isOwner?: boolean;
}

const EntryItem: FC<Props> = ({ entryName, isOwner, ...props }) => {
  return (
    <Style.Item {...props}>
      <Style.Inner>
        <Style.NameBox>
          <Style.EntryName>{entryName}</Style.EntryName>
          <Style.IconWrapper>
            {isOwner && <Icon Svg={Crown} color='#fff600' />}
          </Style.IconWrapper>
        </Style.NameBox>
      </Style.Inner>
    </Style.Item>
  );
};

export default EntryItem;

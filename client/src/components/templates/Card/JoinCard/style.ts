import styled from '@emotion/styled';

import { IconButton } from '@molecules/Button';
import { SearchInput } from '@molecules/Input';

namespace JoinCardStyle {
  export const RoomSearchInput = styled(SearchInput)`
    width: 100%;
    margin-bottom: 20px;
  `;

  export const RefreshButton = styled(IconButton)`
    margin: 20px auto 0 auto;
  `;
}

export default JoinCardStyle;

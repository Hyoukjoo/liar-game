import { useMemo } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, Theme, ThemeProvider } from '@emotion/react';

import Style from '../src/common/styles/storybook';
import FontStyle from '../src/common/styles/fontStyle';
import GlobalStyle from '../src/common/styles/globalStyle';
import useClient from '../src/hooks/useClient';

const withThemeDecorator = (Story) => {
  const { clientHeight } = useClient();
  const vh100 = useMemo(() => (clientHeight ? clientHeight + 'px' : '100vh'), [
    clientHeight,
  ]);

  const theme: Theme = {
    client: { vh100 },
  };

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Global styles={FontStyle} />
      <Style.GlassLayout>
        <Story />
      </Style.GlassLayout>
    </ThemeProvider>
  );
};

addDecorator(withThemeDecorator);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  layout: 'fullscreen',
});

import { useMemo } from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Global, Theme, ThemeProvider } from "@emotion/react";

import FontStyle from "../src/common/styles/fontStyle";
import GlobalStyle from "../src/common/styles/globalStyle";
import useClient from "../src/hooks/useClient";

const withThemeProvider = (story) => {
  const { clientHeight } = useClient();
  const vh100 = useMemo(() => (clientHeight ? clientHeight + "px" : "100vh"), [
    clientHeight,
  ]);

  const theme: Theme = {
    client: { vh100 },
  };

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Global styles={FontStyle} />
      {story()}
    </ThemeProvider>
  );
};

addDecorator(withKnobs);
addDecorator(withThemeProvider);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

configure(require.context("../src", true, /\.stories\.tsx?$/), module);

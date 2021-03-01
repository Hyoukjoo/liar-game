import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Global, ThemeProvider } from "@emotion/react";

import FontStyle from "../src/common/styles/fontStyle";
import GlobalStyle from "../src/common/styles/globalStyle";

const withThemeProvider = (story) => {
  const theme = {};
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

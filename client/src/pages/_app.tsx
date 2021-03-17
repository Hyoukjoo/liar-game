import React, { FC, Fragment, useMemo } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Global, Theme, ThemeProvider } from "@emotion/react";

import GlobalStyles from "@common/styles/globalStyle";
import FontStyles from "@common/styles/fontStyle";
import useClient from "@hooks/useClient";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { clientHeight } = useClient();
  const vh100 = useMemo(() => (clientHeight ? clientHeight + "px" : "100vh"), [
    clientHeight,
  ]);
  const theme: Theme = {
    client: { vh100 },
  };

  return (
    <Fragment>
      <Head>
        <title>liar game</title>
        <meta name='title' content='liar game' />
        <meta name='description' content='game with friends' />

        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />

        <meta name='og:type' content='website' />
        <meta name='og:url' content='http://localhost:3000' />
        <meta name='og:title' content='liar game' />
        <meta name='og:description' content='game with friends' />
        <meta name='og:image' content='' />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Global styles={FontStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;

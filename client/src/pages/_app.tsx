import React, { FC, Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Global, Theme, ThemeProvider } from "@emotion/react";

import GlobalStyles from "@common/styles/globalStyle";
import FontStyles from "@common/styles/fontStyle";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const theme: Theme = {
    color: {
      black: "#000",
    },
  };

  return (
    <Fragment>
      <Head>
        <title>liar game</title>
        <meta name='title' content='liar game' />
        <meta name='description' content='game with friends' />

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

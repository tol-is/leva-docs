import "../styles/fonts.css";
import "../styles/reset.css";

import NextApp from "next/app";
import { AppProps } from "next/app";

import { Sidenav } from "@components/Sidenav";
import { AppHeader } from "@components/AppHeader";

import { useRouter } from "next/router";

import { globalStyles } from "@styles/global";

import { Main } from "@components/UI";

interface LevaAppProps extends AppProps {}

const LevaApp = ({ Component, pageProps }: LevaAppProps) => {
  const router = useRouter();

  const isHome = router.asPath === "/";

  globalStyles();

  return (
    <>
      <AppHeader />
      {!isHome && <Sidenav />}
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
};

LevaApp.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default LevaApp;

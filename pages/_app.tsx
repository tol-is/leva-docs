import "../styles/fonts.css";
import "../styles/reset.css";

import NextApp from "next/app";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Sidenav } from "@components/Sidenav";
import { AppHeader } from "@components/AppHeader";
import { AppFooter } from "@components/AppFooter";
import { globalStyles } from "@styles/global";
import { Container, Main } from "@components/UI";

interface LevaAppProps extends AppProps {}

const LevaApp = ({ Component, pageProps }: LevaAppProps) => {
  const router = useRouter();

  const isHome = router.asPath === "/";

  globalStyles();

  return (
    <>
      <AppHeader />
      <Main>
        <Component {...pageProps} />
      </Main>
      <AppFooter />
    </>
  );
};

LevaApp.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default LevaApp;

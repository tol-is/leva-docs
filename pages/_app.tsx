import "../styles/fonts.css";

import NextApp from "next/app";
import { AppProps } from "next/app";

import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../twind.config";

import { Hero } from "@components/Hero";
import { Sidenav } from "@components/Sidenav";
import { AppHeader } from "@components/AppHeader";
import { Container } from "@components/UI";
import { useRouter } from "next/router";

import { globalStyles } from "@styles/global";

type Doc = {
  code: string;
  frontmatter: {
    title: string;
    description: string;
    order: number;
  };
};
interface LevaAppProps extends AppProps {}

const LevaApp = ({ Component, pageProps }: LevaAppProps) => {
  const router = useRouter();

  const isHome = router.asPath === "/";

  globalStyles();

  return (
    <div>
      <Hero />
      <AppHeader />
      {!isHome && <Sidenav />}
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
};

LevaApp.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default withTwindApp(twindConfig, LevaApp);

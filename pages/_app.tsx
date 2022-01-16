import "../styles/fonts.css";
import "../styles/index.css";

import NextApp from "next/app";
import { AppProps } from "next/app";

import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../twind.config";

import { Sidenav } from "@components/Sidenav";
import { AppHeader, Container } from "@components/UI";

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
  return (
    <div>
      <AppHeader />
      <Sidenav />
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

import "../styles/fonts.css";

import NextApp from "next/app";
import { AppProps } from "next/app";

import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../twind.config";

import { Sidenav } from "@components/Sidenav";
import { Container } from "@components/UI";
import { AppHeader } from "@components/AppHeader";

import Demo from "../demos/busy";

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
      <Sidenav />
      <Demo />
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

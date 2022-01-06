import "../styles.css";

import NextApp from "next/app";
import { AppProps } from "next/app";

import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../twind.config";

import map from "../deps/mdx-map";

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
      <div>{JSON.stringify(map)}</div>
      <Component {...pageProps} />
    </div>
  );
};

LevaApp.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default withTwindApp(twindConfig, LevaApp);

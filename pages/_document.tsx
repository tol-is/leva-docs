import Document, { Html, Head, Main, NextScript } from "next/document";

import withTwindDocument from "@twind/next/shim/document";
import { twindConfig } from "../twind.config";

class LevaDoc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta key="robots" name="robots" content="noindex,follow" />
          <meta key="googlebot" name="googlebot" content="noindex,follow" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTwindDocument(twindConfig, LevaDoc);

import Document, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "@styles/stitches.config";

class LevaDoc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta key="robots" name="robots" content="noindex,follow" />
          <meta key="googlebot" name="googlebot" content="noindex,follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=IBM+Plex+Mono&family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LevaDoc;

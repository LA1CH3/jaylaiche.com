import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssString, globalStyles } from "@la1ch3/ui";

import { ColorModeScript } from "../util/ColorModeScript";

const GlobalStylesScript = () => {
  const script = `
    const globalStyles = ${globalStyles.toString()};

    globalStyles();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }}></script>;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <GlobalStylesScript />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

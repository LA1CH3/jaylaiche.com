import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssString } from "@la1ch3/ui";

import { ColorModeScript } from "../util/ColorModeScript";

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
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

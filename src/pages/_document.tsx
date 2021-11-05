import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssString } from "@la1ch3/ui";

import { ColorModeScript } from "../util/ColorModeScript";

import favicon from "../public/static/images/favicon.svg";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link rel="icon" type="image/svg+xml" href={favicon.src} />
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

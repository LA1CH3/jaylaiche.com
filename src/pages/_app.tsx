import { globalStyles, AppRoot } from "@la1ch3/ui";

import { ColorModeProvider } from "../util/ColorModeProvider";

import "../util/globals.css";

function App({ Component, pageProps }) {
  // globalStyles();

  return (
    <ColorModeProvider>
      <AppRoot css={{ paddingLeft: "calc(100vw - 100%)" }}>
        <Component {...pageProps} />;
      </AppRoot>
    </ColorModeProvider>
  );
}

export default App;

import { AppRoot, AppContent } from "@la1ch3/ui";

import { AppHeader, AppFooter } from "../components";
import { ColorModeProvider } from "../util/ColorModeProvider";

import "../util/globals.css";

function App({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <AppRoot css={{ paddingLeft: "calc(100vw - 100%)" }}>
        <AppHeader />
        <AppContent css={{ width: "100%" }}>
          <Component {...pageProps} />
        </AppContent>
        <AppFooter />
      </AppRoot>
    </ColorModeProvider>
  );
}

export default App;

import { globalStyles, ColorModeProvider, AppRoot } from "@la1ch3/ui";

function App({ Component, pageProps }) {
  globalStyles();

  return (
    <ColorModeProvider>
      <AppRoot css={{ paddingLeft: "calc(100vw - 100%)" }}>
        <Component {...pageProps} />;
      </AppRoot>
    </ColorModeProvider>
  );
}

export default App;

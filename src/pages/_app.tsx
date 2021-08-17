import { globalStyles } from "@la1ch3/ui";

function App({ Component, pageProps }) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default App;

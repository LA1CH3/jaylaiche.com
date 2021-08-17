import { AppContent, AppRoot } from "@la1ch3/ui";

import { AppHeader, AppWidth } from ".";

export const PageLayout = ({ children }) => (
  <AppRoot>
    <AppWidth>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <footer>Hey</footer>
    </AppWidth>
  </AppRoot>
);

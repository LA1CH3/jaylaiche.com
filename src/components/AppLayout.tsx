import { AppContent, AppRoot } from "@la1ch3/ui";
import { ReactNode } from "react";

import { AppHeader, AppWidth } from ".";
import { PostMeta } from "../util/getAllPosts";
import { PostLayout } from "./PostLayout";

type AppLayoutProps = {
  children: ReactNode;
  meta?: PostMeta;
};

export const AppLayout = ({ children, meta }: AppLayoutProps): JSX.Element => (
  <AppRoot>
    <AppWidth>
      <AppHeader />
      <AppContent css={{ width: "100%" }}>
        {meta ? <PostLayout meta={meta}>{children}</PostLayout> : children}
      </AppContent>
      <footer>Hey</footer>
    </AppWidth>
  </AppRoot>
);

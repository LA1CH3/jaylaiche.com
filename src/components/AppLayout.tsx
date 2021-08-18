import { AppContent, AppRoot } from "@la1ch3/ui";
import { ReactNode } from "react";

import { AppHeader, AppWidth, AppFooter } from ".";
import { PostMeta } from "../util/getAllPosts";
import { MdxLayout } from "./MdxLayout";

type AppLayoutProps = {
  children: ReactNode;
  meta?: PostMeta;
  home?: boolean;
};

export const AppLayout = ({
  children,
  home,
  meta,
}: AppLayoutProps): JSX.Element => (
  <AppRoot>
    <AppWidth>
      <AppHeader />
      <AppContent css={{ width: "100%" }}>
        {!home ? <MdxLayout meta={meta}>{children}</MdxLayout> : children}
      </AppContent>
      <AppFooter />
    </AppWidth>
  </AppRoot>
);

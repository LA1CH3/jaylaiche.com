import { AppContent } from "@la1ch3/ui";
import { ReactNode } from "react";
import Head from "next/head";

import { AppHeader, AppFooter } from ".";
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
  <>
    <Head>
      <title>
        {meta && `${meta.title.toLowerCase()} | `}jay laiche - front-end
        developer
      </title>
    </Head>
    <AppHeader />
    <AppContent css={{ width: "100%" }}>
      {!home ? <MdxLayout meta={meta}>{children}</MdxLayout> : children}
    </AppContent>
    <AppFooter />
  </>
);

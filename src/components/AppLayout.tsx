import { ReactNode } from "react";
import Head from "next/head";

import { PostMeta } from "../util/getAllPosts";
import { MdxLayout } from "./MdxLayout";

type AppLayoutProps = {
  children: ReactNode;
  meta?: PostMeta;
  home?: boolean;
};

const META_DESC = "personal blog for jay laiche, front-end developer";

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
      <meta name="description" content={META_DESC} />
    </Head>
    {!home ? <MdxLayout meta={meta}>{children}</MdxLayout> : children}
  </>
);

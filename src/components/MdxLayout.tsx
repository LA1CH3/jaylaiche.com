import { MDXProvider } from "@mdx-js/react";
import { Column, Text, Anchor } from "@la1ch3/ui";

import { H2, P, Code, Pre } from "./Mdx";

const components = {
  h2: H2,
  p: P,
  a: Anchor,
  pre: Pre,
  code: Code,
};

export const MdxLayout = ({ meta, children }) => (
  <Column>
    {meta && (
      <Column align="center" width="100%" css={{ marginBottom: "$huge" }}>
        <Text weight="semibold">{meta.title}</Text>
        {meta.date && <Text>{meta.date}</Text>}
      </Column>
    )}
    <MDXProvider components={components}>{children}</MDXProvider>
  </Column>
);

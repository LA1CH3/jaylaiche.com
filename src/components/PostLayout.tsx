import { MDXProvider } from "@mdx-js/react";
import { Column, Text, Anchor } from "@la1ch3/ui";

import { H2, P } from "./Mdx";

const components = {
  h2: H2,
  p: P,
  a: Anchor,
};

export const PostLayout = ({ meta, children }) => (
  <Column>
    <Column
      align="center"
      gap="small"
      width="100%"
      css={{ marginBottom: "$huge" }}
    >
      <Text weight="semibold">{meta.title}</Text>
      <Text>{meta.date}</Text>
    </Column>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Column>
);

import { MDXProvider } from "@mdx-js/react";
import { Column, Text, Anchor } from "@la1ch3/ui";

import { H2, H3, P, Code, Pre, Ul } from "./Mdx";
import { AppWidth } from "./AppWidth";
import { formatDate } from "../util/date";

const components = {
  h2: H2,
  h3: H3,
  p: P,
  a: Anchor,
  pre: Pre,
  code: Code,
  ul: Ul,
};

export const MdxLayout = ({ meta, children }) => {
  return (
    <AppWidth>
      <Column width="100%">
        {meta && (
          <Column
            align="center"
            width="100%"
            css={{ marginBottom: "$huge", textAlign: "center" }}
          >
            <Text size="large" weight="bold">
              {meta.title}
            </Text>
            {meta.date && <Text>{formatDate(meta.date)}</Text>}
          </Column>
        )}
        <MDXProvider components={components}>{children}</MDXProvider>
      </Column>
    </AppWidth>
  );
};

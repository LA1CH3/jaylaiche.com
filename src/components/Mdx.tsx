import { Text } from "@la1ch3/ui";

export const H2 = ({ children }) => (
  <Text size="large" css={{ marginBottom: "$large" }}>
    {children}
  </Text>
);

export const P = ({ children }) => (
  <Text css={{ marginBottom: "$large" }}>{children}</Text>
);

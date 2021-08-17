import { Column, Divider, Text } from "@la1ch3/ui";

export const AppHeader = () => (
  <Column gap="large" align="center" css={{ paddingTop: "$giant" }}>
    <Text as="h1" size="huge" weight="bold">
      jay laiche
    </Text>
    <Text as="h2" size="large" weight="bold">
      front-end developer
    </Text>
    <Divider
      css={{
        margin: "$small 0",
        width: "60%",
        maxWidth: "272px",
        "@large": {
          width: "50%",
          maxWidth: "none",
        },
      }}
    />
  </Column>
);

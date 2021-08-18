import { Column, Divider, Text } from "@la1ch3/ui";

import { NextLink } from ".";

export const AppHeader = () => (
  <Column
    gap="medium"
    align="center"
    css={{ paddingTop: "$large", paddingBottom: "$medium" }}
  >
    <Text
      as="h1"
      size="huge"
      weight="bold"
      css={{
        ":before": {
          content: "{",
          color: "$ink100",
          marginRight: "$medium",
        },
        ":after": {
          content: "}",
          color: "$ink100",
          marginLeft: "$medium",
        },
      }}
    >
      <NextLink
        href="/"
        css={{
          "&:hover,&:focus": {
            textDecoration: "none",
          },
        }}
      >
        jay laiche
      </NextLink>
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

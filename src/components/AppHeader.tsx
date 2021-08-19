import { Column, Divider, Text } from "@la1ch3/ui";

import { NextLink } from ".";
import { AppWidth } from "./AppWidth";

export const AppHeader = () => (
  <AppWidth>
    <Column
      gap="medium"
      align="center"
      css={{
        paddingTop: "$large",
        paddingBottom: "$medium",
        textAlign: "center",
      }}
    >
      <Text
        as="h1"
        size="huge"
        weight="bold"
        css={{
          ":before": {
            content: "{",
            color: "$textPrimary",
            marginRight: "$medium",
          },
          ":after": {
            content: "}",
            color: "$textPrimary",
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
  </AppWidth>
);

import { Row } from "@la1ch3/ui";

import { NextLink } from ".";

export const AppFooter = () => (
  <Row
    width="100%"
    css={{ marginBottom: "$small" }}
    justify="center"
    gap="giant"
  >
    <NextLink href="/about">about</NextLink>
    <NextLink href="/portfolio">portfolio</NextLink>
    <NextLink href="/contact">contact</NextLink>
  </Row>
);

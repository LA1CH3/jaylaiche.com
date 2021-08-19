import { Row, useColorMode, Button } from "@la1ch3/ui";

import { NextLink } from ".";
import { AppWidth } from "./AppWidth";

export const AppFooter = () => {
  const [colorMode, toggleMode] = useColorMode();

  const buttonText = `${colorMode === "light" ? "Dark" : "Light"} Mode`;

  return (
    <AppWidth>
      <Row width="100%" justify="between" align="center">
        <Row
          gap={{
            "@initial": "small",
            "@medium": "huge",
          }}
        >
          <NextLink href="/about">about</NextLink>
          <NextLink href="/portfolio">portfolio</NextLink>
          <NextLink href="/contact">contact</NextLink>
        </Row>
        <Button ghost onClick={toggleMode}>
          {buttonText}
        </Button>
      </Row>
    </AppWidth>
  );
};

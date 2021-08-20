import { Row, Anchor } from "@la1ch3/ui";

import { NextLink } from ".";
import { AppWidth } from "./AppWidth";

import { useColorMode } from "../util/ColorModeProvider";

export const AppFooter = () => {
  const [colorMode, setMode] = useColorMode();

  const buttonText = `${colorMode === "light" ? "dark" : "light"} mode`;

  const toggleMode = () => {
    if (colorMode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <AppWidth>
      <Row
        width="100%"
        justify="between"
        align="baseline"
        css={{ marginBottom: "$large" }}
      >
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
        <Anchor href="javascript:void(0)" onClick={toggleMode}>
          {buttonText}
        </Anchor>
      </Row>
    </AppWidth>
  );
};

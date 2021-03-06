import { Column, Divider, Row, Text } from "@la1ch3/ui";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

import { NextLink } from ".";
import { AppWidth } from "./AppWidth";
import { usePrefersReducedMotion } from "../util/usePrefersReducedMotion";

export const AppHeader = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationDuration = prefersReducedMotion ? 0 : 1;

  return (
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
        <Row>
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: animationDuration }}
          >
            <Text size="huge" weight="bold">{`{`}</Text>
          </motion.div>
          <Text as="h1" size="huge" weight="bold" css={{ margin: "0 $medium" }}>
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
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: animationDuration }}
          >
            <Text size="huge" weight="bold">{`}`}</Text>
          </motion.div>
        </Row>

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
};

import NextImage from "next/image";
import { Text, styled, UnorderedList } from "@la1ch3/ui";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/shadesOfPurple";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

import { useColorMode } from "../util/ColorModeProvider";

export const Img = ({ src, ...props }) => (
  <div style={{ minWidth: "100%" }}>
    <NextImage layout="responsive" src={`/images/${src}`} {...props} />
  </div>
);

export const H2 = ({ children }) => (
  <Text size="large" css={{ marginBottom: "$large" }}>
    {children}
  </Text>
);

export const H3 = ({ children }) => (
  <Text size="medium" css={{ marginBottom: "$medium" }} weight="semibold">
    {children}
  </Text>
);

export const P = ({ children }) => (
  <Text css={{ marginBottom: "$large", width: "100%" }}>{children}</Text>
);

export const Ul = ({ children }) => (
  <UnorderedList gap="medium">{children}</UnorderedList>
);

export const Pre = styled("div", {
  marginBottom: "$large",
  fontFamily: "Menlo, monospace",
  fontSize: "$baseline",
  width: "100%",
});

export const Code = ({ children, className }) => {
  const [colorMode] = useColorMode();

  const language = className.replace(/language-/, "");

  const syntaxTheme = colorMode === "dark" ? lightTheme : darkTheme;

  return (
    <Highlight
      {...defaultProps}
      theme={syntaxTheme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            borderRadius: "2px",
            overflow: "auto",
          }}
        >
          {tokens.slice(0, -1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} id="thingy">
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

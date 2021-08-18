import { Text, styled } from "@la1ch3/ui";
import Highlight, { defaultProps } from "prism-react-renderer";
import shades from "prism-react-renderer/themes/shadesOfPurple";

export const H2 = ({ children }) => (
  <Text size="large" css={{ marginBottom: "$large" }}>
    {children}
  </Text>
);

export const P = ({ children }) => (
  <Text css={{ marginBottom: "$large" }}>{children}</Text>
);

export const Pre = styled("div", {
  width: "100%",
  marginTop: "$large",
  fontFamily: "monospace",
});

export const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      theme={shades}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", borderRadius: "2px" }}
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

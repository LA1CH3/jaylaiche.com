import { darkTheme } from "@la1ch3/ui";

const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem("colorMode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
};

export const ColorModeScript = () => {
  const stuff = `
    (function() {
      const getInitialColorMode = () => {
        const persistedColorPreference = window.localStorage.getItem("colorMode");
        const hasPersistedPreference = typeof persistedColorPreference === "string";

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia("(prefers-color-scheme: dark");
        const hasMediaQueryPreference = typeof mql.matches === "boolean";

        if (hasMediaQueryPreference) {
          return mql.matches ? "dark" : "light";
        }

        return "light";
      };

      const colorMode = getInitialColorMode();

      const root = document.documentElement;

      if (colorMode === 'dark') {
        root.classList.add("${darkTheme}");
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: stuff }}></script>;
};

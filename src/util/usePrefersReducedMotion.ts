import { useState, useEffect } from "react";

const prefersReducedMotionQuery = "(prefers-reduced-motion: no-preference)";

const isServer = typeof window === "undefined";

const getInitialState = () => {
  return isServer
    ? true
    : !window.matchMedia(prefersReducedMotionQuery).matches;
};

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setMotionPreference] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(prefersReducedMotionQuery);

    const listener = (event) => {
      setMotionPreference(!event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
};

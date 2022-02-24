import React, { useState, useEffect } from "react";

export const useDimension = () => {
  const hasWindow = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    widthW: hasWindow ? window.innerWidth : null,
    heightW: hasWindow ? window.innerHeight : null,
  });

  const updateDimension = () => {
    setWindowSize({
      widthW: window.innerWidth,
      heightW: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension, { passive: true });
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return {
    windowSize,
  };
};

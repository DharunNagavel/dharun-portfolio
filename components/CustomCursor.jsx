"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cur");

    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
};

export default CustomCursor;

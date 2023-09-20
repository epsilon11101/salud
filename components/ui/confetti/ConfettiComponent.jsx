"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const isClient = typeof window !== "undefined";

  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : "800",
    height: isClient ? window.innerHeight : "800",
  });

  const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

  useEffect(() => {
    // Verificar si estamos en un entorno de navegador antes de acceder a window
    if (isClient) {
      setSize({ width: window.innerWidth, height: window.innerHeight });

      function handleResize() {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  return (
    <>
      <Confetti width={size.width} height={size.height} colors={colors} />
    </>
  );
};

export default ConfettiComponent;

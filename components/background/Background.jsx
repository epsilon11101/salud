"use client";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { usePathname } from "next/navigation";

import { ImageContainer } from "./Background.styled";

import frame from "public/assets/Frame.png";
import tabletFrame from "public/assets/tablet.png";

const Background = () => {
  const currentPath = usePathname();
  const tablet = useMediaQuery("(min-width:768px) and (max-width:1279px)");

  return (
    <>
      {currentPath === "/diary" || currentPath === "/calculator" ? (
        <></>
      ) : (
        <ImageContainer>
          <Image src={!tablet ? frame : tabletFrame} alt="frame" />
        </ImageContainer>
      )}
    </>
  );
};

export default Background;

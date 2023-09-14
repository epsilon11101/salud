"use client";
import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import completeLogo from "/public/assets/logoWithText.svg";

import FormWeight from "../form/FormWeight";
const HeaderDesktop = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          paddingTop: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "66px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        >
          <Image src={completeLogo} alt="logo" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "32px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "13px",
            paddingLeft: "20px",
            borderLeft: "2px solid #9B9FAA",
          }}
        >
          <Link href="/">INICIAR SESIÓN</Link>
          <Link href="/">CREAR UNA CUENTA</Link>
        </Box>
      </Box>

      {/* MAIN */}
    </Box>
  );
};

export default HeaderDesktop;

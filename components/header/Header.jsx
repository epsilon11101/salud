"use client";
import React from "react";
import { Box } from "@mui/material";
import Nav from "./nav/Nav";
import { LoginNav } from "./nav/LoginNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import Background from "../background/Background";

import { useUser } from "@/hooks/useUser";

const Header = () => {
  const { isAuth } = useUser();

  const desktop = useMediaQuery("(min-width:1279px)");
  const mobile = useMediaQuery("(max-width:768px)");

  const headerStyle = {
    width: "100%",
    height: !isAuth ? "80px" : "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "27px",
    height: !isAuth ? "80px" : "120px",
    borderBottom: !isAuth && !desktop ? "2px solid #E0E0E0" : "none",
    paddingTop: "2rem",
  };

  return (
    <Box component="header" sx={headerStyle}>
      <Background />
      <Nav islogin={isAuth} />
      {isAuth && mobile && <LoginNav />}
    </Box>
  );
};

export default Header;

"use client";
import React from "react";
import { Box } from "@mui/material";
import Nav from "./nav/Nav";
import { LoginNav } from "./nav/LoginNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import Background from "../background/Background";

const Header = ({ islogin }) => {
  const desktop = useMediaQuery("(min-width:1279px)");
  const mobile = useMediaQuery("(max-width:768px)");

  const headerStyle = {
    width: "100%",
    height: !islogin ? "80px" : "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "27px",
    height: !islogin ? "80px" : "120px",
    borderBottom: !islogin && !desktop ? "2px solid #E0E0E0" : "none",
    paddingTop: "2rem",
  };

  return (
    <Box component="header" sx={headerStyle}>
      <Background />
      <Nav islogin={true} />
      {islogin && mobile && <LoginNav />}
    </Box>
  );
};

export default Header;

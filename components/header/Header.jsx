import React from "react";
import { Box } from "@mui/material";
import Nav from "./nav/Nav";
import LoginNav from "./nav/LoginNav";

const Header = (isLogin) => {
  const headerStyle = {
    width: "100%",
    height: !isLogin ? "80px" : "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "27px",
    height: !isLogin ? "80px" : "120px",
    borderBottom: !isLogin ? "2px solid #E0E0E0" : "none",
  };
  return (
    <Box component="header" sx={headerStyle}>
      <Nav isLogin={isLogin} />
      {isLogin && <LoginNav />}
    </Box>
  );
};

export default Header;

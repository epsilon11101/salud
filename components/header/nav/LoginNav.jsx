"use client";
import { Typography } from "@mui/material";
import { LoginNavContainer, LogOutContainer } from "./LoginNav.styled";
const LoginNav = () => {
  return (
    <LoginNavContainer component="nav">
      <Typography variant="h6" component="p">
        Aaron
      </Typography>
      <LogOutContainer>
        <Typography variant="h6" component="p">
          Exit
        </Typography>
      </LogOutContainer>
    </LoginNavContainer>
  );
};

export default LoginNav;

"use client";
import { Typography, Box } from "@mui/material";
import {
  LoginNavContainer,
  LogOutContainer,
  UserContainer,
} from "./LoginNav.styled";

export const LoginNav = () => {
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

export const UserNav = () => {
  return (
    <UserContainer>
      <Typography variant="h6" component="p">
        Aaron
      </Typography>
      <Box>
        <Typography variant="h6" component="p">
          Exit
        </Typography>
      </Box>
    </UserContainer>
  );
};

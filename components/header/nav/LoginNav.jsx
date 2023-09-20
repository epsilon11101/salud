"use client";
import { useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";
import {
  LoginNavContainer,
  LogOutContainer,
  UserContainer,
} from "./LoginNav.styled";

import { useUser } from "@/hooks/useUser";
import { useDay } from "@/hooks/useDay";

export const LoginNav = () => {
  const { useLogOut: logOut, user } = useUser();
  const { useRestoreDay: restoreDay } = useDay();
  const router = useRouter();

  const onLogoutHandler = async () => {
    restoreDay();
    await logOut();
    window.location.reload();
  };

  return (
    <LoginNavContainer component="nav">
      <Typography variant="h6" component="p">
        {user.name}
      </Typography>
      <LogOutContainer>
        <Typography variant="h6" component="p" onClick={onLogoutHandler}>
          Exit
        </Typography>
      </LogOutContainer>
    </LoginNavContainer>
  );
};

export const UserNav = () => {
  const { useLogOut: logOut, user } = useUser();
  const { useRestoreDay: restoreDay } = useDay();
  const router = useRouter();

  const onLogoutHandler = async () => {
    restoreDay();
    await logOut();
    window.location.reload();
  };
  return (
    <UserContainer>
      <Typography variant="h6" component="p">
        {user.name}
      </Typography>
      <Box>
        <Typography variant="h6" component="p" onClick={onLogoutHandler}>
          Exit
        </Typography>
      </Box>
    </UserContainer>
  );
};

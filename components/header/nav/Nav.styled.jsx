import { styled } from "@mui/system";
import Link from "next/link";
import { Box, Modal } from "@mui/material";

export const NavContainer = styled(Box)(({ isLogin }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: !isLogin ? "none" : "96.03px",
}));

export const NavLogo = styled(Link)(({ isLogin }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: !isLogin ? "20%" : "50%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

export const NavLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  width: "80%",
});

export const BurgerNav = styled(Box)({
  "& svg": {
    fill: "black",
  },
});

export const BurgerMenu = styled(Modal)({
  marginTop: "80px",
  backgroundColor: "#264061",
  "& div.MuiBackdrop-root": {
    backgroundColor: "transparent",
    marginTop: "80px",
  },
  "& .MuiBox-root": {
    border: "none",
  },
  "& div": {
    backgroundColor: "transparent",
    width: "100%",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    "&:hover": {
      border: "none",
    },
    "& a": {
      textTransform: "uppercase",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "18px",
      letterSpacing: "4%",
      "&:hover": {
        transition: "transform ease 0.5s",
        transform: "scale(1.2)",
      },
    },
  },
});

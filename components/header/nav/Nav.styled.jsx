import { styled } from "@mui/system";
import Link from "next/link";
import { Box, Modal } from "@mui/material";

export const NavContainer = styled(Box)(({ islogin }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "none",
  gap: !islogin ? "none" : "96.03px",
  borderBottom: "2px solid #E0E0E0",
  "@media (min-width: 1280px)": {
    borderBottom: "none",
    width: "100%",
    gap: "2rem",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    gap: "2rem",
  },
}));

export const NavLogo = styled(Link)(({ islogin }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: !islogin ? "20%" : "50%",
  height: "44px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "80%",
    height: "66px",
  },
  "@media (min-width: 1280px)": {
    width: "20%",
    height: "66px",
  },
}));

export const NavLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  width: "80%",
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "100%",
    justifyContent: "flex-end",
    gap: "15px",
  },
  "@media (min-width: 1280px)": {
    width: "100%",

    justifyContent: "flex-start",
    paddingLeft: "2%",
    gap: "15px",
    borderLeft: "2px solid #9B9FAA",
  },
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

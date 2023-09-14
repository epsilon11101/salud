"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import { Box, Typography } from "@mui/material";
import {
  NavContainer,
  NavLinks,
  NavLogo,
  BurgerNav,
  BurgerMenu,
} from "./Nav.styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/public/assets/logo.svg";
import logoWithText from "/public/assets/logoWithText.svg";

const pages = ["Iniciar Sesión", "Crear Cuenta"];
const pagesLogin = ["Diario", "Calculadora"];

const Nav = ({ islogin }) => {
  const [onOpen, setOnOpen] = useState(false);

  const mobile = useMediaQuery("(max-width:768px)");
  const tablet = useMediaQuery("(min-width:768px)");
  const desktop = useMediaQuery("(min-width:1280px)");

  const onOpenMenu = () => {
    setOnOpen(true);
  };

  const onCloseMenu = () => {
    setOnOpen(false);
    console.log("cerrando");
  };

  return (
    <NavContainer component="nav" islogin={islogin}>
      <NavLogo href="" islogin={islogin}>
        <Image src={!islogin && !tablet ? logo : logoWithText} alt="img" />
      </NavLogo>
      {!islogin && (
        <NavLinks>
          {pages.map((page) => (
            <Link key={nanoid()} href="">
              {page}
            </Link>
          ))}
        </NavLinks>
      )}
      {islogin && !mobile && (
        <>
          {desktop && (
            <NavLinks>
              {pagesLogin.map((page) => (
                <Link key={nanoid()} href="">
                  {page}
                </Link>
              ))}
            </NavLinks>
          )}
          {/* nombre */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",

              "& p": {
                color: "black",
                fontWeight: "bold",
                borderRight: "2px solid #9B9FAA",
                paddingRight: "40px",
              },
              "& p:last-child": {
                color: "#9B9FAA",
                borderRight: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "black",
                },
              },
            }}
          >
            <Typography variant="h6" component="p">
              Aaron
            </Typography>
            <Box>
              <Typography variant="h6" component="p">
                Exit
              </Typography>
            </Box>
          </Box>
        </>
      )}
      {islogin && (tablet || mobile) && !desktop && (
        <BurgerNav>
          {!onOpen ? (
            <MenuIcon onClick={onOpenMenu} />
          ) : (
            <CloseIcon onClick={onCloseMenu} />
          )}
          <BurgerMenu
            open={onOpen}
            onClose={onCloseMenu}
            aria-labelledby="menu"
            aria-describedby="user menu"
          >
            <Box>
              <Link href="/diary" onClick={onCloseMenu}>
                diario
              </Link>
              <Link href="/calculator" onClick={onCloseMenu}>
                calculadora
              </Link>
            </Box>
          </BurgerMenu>
        </BurgerNav>
      )}
    </NavContainer>
  );
};

export default Nav;

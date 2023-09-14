"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import { Box } from "@mui/material";
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

const Nav = ({ islogin }) => {
  const [onOpen, setOnOpen] = useState(false);

  const tablet = useMediaQuery("(min-width:768px)");

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
      {islogin && (
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

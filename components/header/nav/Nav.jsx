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

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/public/assets/logo.svg";
import logoWithText from "/public/assets/logoWithText.svg";

const pages = ["Iniciar Sesión", "Crear Cuenta"];

const Nav = (isLogin) => {
  const [onOpen, setOnOpen] = useState(false);

  const onOpenMenu = () => {
    setOnOpen(true);
  };

  const onCloseMenu = () => {
    setOnOpen(false);
    console.log("cerrando");
  };

  return (
    <NavContainer component="nav" isLogin={isLogin}>
      <NavLogo href="" isLogin={isLogin}>
        <Image src={!isLogin ? logo : logoWithText} alt="img" />
      </NavLogo>
      {!isLogin && (
        <NavLinks>
          {pages.map((page) => (
            <Link key={nanoid()} href="">
              {page}
            </Link>
          ))}
        </NavLinks>
      )}
      {isLogin && (
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

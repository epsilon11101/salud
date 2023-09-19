"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import { Box } from "@mui/material";
import { UserNav } from "./LoginNav";
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
const href = ["/login", "/new-account"];
const pagesLogin = ["Diario", "Calculadora"];
const hrefLogin = ["/diary", "/calculator"];

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
  };

  return (
    <NavContainer component="nav" islogin={islogin}>
      <NavLogo href={islogin ? "/calculator" : "/"} islogin={islogin}>
        <Image src={!islogin && !tablet ? logo : logoWithText} alt="img" />
      </NavLogo>
      {!islogin && (
        <NavLinks>
          {pages.map((page, i) => (
            <Link key={nanoid()} href={href[i]}>
              {page}
            </Link>
          ))}
        </NavLinks>
      )}
      {islogin && !mobile && (
        <>
          {desktop && (
            <NavLinks>
              {pagesLogin.map((page, i) => (
                <Link key={nanoid()} href={hrefLogin[i]}>
                  {page}
                </Link>
              ))}
            </NavLinks>
          )}
          <UserNav />
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

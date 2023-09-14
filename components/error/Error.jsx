import { Box, Typography } from "@mui/material";
import { MainContainer } from "../ui/MainContainer/MainContainer.styled";
import React from "react";

const Error = () => {
  return (
    <Box
      sx={{
        ...MainContainer,
        "& p:first-of-type": {
          fontSize: "15rem",
          fontWeight: "bold",
          color: "yellow",
          textShadow: "2px 2px 4px #000000",
        },
        "& p:last-of-type": {
          fontSize: "5rem",
          fontWeight: "bold",
          color: "yellow",
          textShadow: "2px 2px 4px #000000",
        },
      }}
    >
      <Typography variant="h1" component="p">
        404
      </Typography>
      <Typography variant="h2" component="p">
        Page not found
      </Typography>
    </Box>
  );
};

export default Error;

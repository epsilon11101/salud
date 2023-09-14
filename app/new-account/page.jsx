import React from "react";
import { Box } from "@mui/material";
import LogForm from "@/components/form/LogForm";
import { LoginNavContainer } from "@/components/ui/MainContainer/MainContainer.styled";
const page = () => {
  return (
    <Box component="section" sx={LoginNavContainer}>
      <LogForm title="crear una cuenta" />
    </Box>
  );
};

export default page;

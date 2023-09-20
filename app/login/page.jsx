"use client";
import LogForm from "@/components/form/LogForm";
import { Box } from "@mui/material";
import { LoginNavContainer } from "@/components/ui/MainContainer/MainContainer.styled";

const page = () => {
  return (
    <Box component="section" sx={LoginNavContainer}>
      <LogForm title="iniciar sesión" isLogin={true} />
    </Box>
  );
};

export default page;

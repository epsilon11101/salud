"use client";
import { Box } from "@mui/material";
import FormWeight from "@/components/form/FormWeight";
import Report from "@/components/diary/report/Report";
import { MainContainer } from "@/components/ui/MainContainer/MainContainer.styled";

const page = () => {
  return (
    <Box component="section" sx={MainContainer}>
      <FormWeight />
      <Report />
    </Box>
  );
};

export default page;

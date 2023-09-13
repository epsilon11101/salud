import React from "react";
import { Box } from "@mui/material";
import LogForm from "@/components/form/LogForm";
const page = () => {
  return (
    <Box
      component="section"
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "32px",
      }}
    >
      <LogForm title="crear una cuenta" />
    </Box>
  );
};

export default page;

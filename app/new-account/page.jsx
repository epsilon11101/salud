import React from "react";
import { Box } from "@mui/material";
import LogForm from "@/components/form/LogForm";
const page = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "32px",
        width: "100% -32px",
        paddingLeft: "32px",
      }}
    >
      <LogForm title="crear una cuenta" />
    </Box>
  );
};

export default page;

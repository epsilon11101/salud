"use client";
import { Box } from "@mui/material";
import { ColorRing } from "react-loader-spinner";
import { CenterContainer } from "../ui/MainContainer/MainContainer.styled";

const Loader = () => {
  return (
    <Box sx={CenterContainer}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#F8DE22", "#F94C10", "#C70039", "#F94C10", "#F8DE22"]}
      />
    </Box>
  );
};

export default Loader;

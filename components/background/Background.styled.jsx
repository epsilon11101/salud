import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const ImageContainer = styled(Box)({
  display: "none",
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "-1",
  right: "0",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    top: "50%",
    display: "block",
  },
  "@media (min-width: 1280px)": {
    display: "block",
    top: "0%",
  },
});

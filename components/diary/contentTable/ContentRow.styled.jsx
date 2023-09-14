import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ContentRowStyled = styled(Box)(({ isInformative }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "left",
  "& p:first-of-type": {
    flexGrow: "10",
    color: isInformative ? "black" : "inherit",
    "&:first-letter": {
      textTransform: "uppercase",
    },
  },
  "& p:last-child": {
    flexGrow: "2",
  },
  "@media (min-width: 1280px)": {
    textAlign: "center",
  },
}));

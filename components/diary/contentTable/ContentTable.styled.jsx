import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ContentWrapper = styled(Box)({
  width: "100%",
  backgroundColor: "#F0F1F3",
});
export const ContentTableStyled = styled(Box)({
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
  "& p:first-of-type": {
    color: "black",
    fontWeight: "700",
  },
  "& p": {
    fontWeight: "400",
    fontSize: "14px",
    linHeight: "17.01px",
    letterSpacing: "4%",
  },
});

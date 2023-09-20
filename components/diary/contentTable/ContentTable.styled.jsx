import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ContentWrapper = styled(Box)({
  width: "100%",
  backgroundColor: "#F0F1F3",
  "@media (min-width: 1280px)": {
    width: "50%",
    backgroundColor: "transparent",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "40%",
    backgroundColor: "transparent",
  },
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
  "@media (min-width: 1280px)": {
    alignItems: "center",
  },
});

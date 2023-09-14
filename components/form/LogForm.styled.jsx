import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  gap: "32px",
  "& p": {
    color: "#FC842D",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "17px",
    letterSpacing: "0.04em",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "50%",
    alignItems: "flex-start",
  },
  "@media (min-width: 1280px)": {
    width: "30%",
    alignItems: "flex-start",
  },
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  gap: "20px",
  "& button": {
    width: "182px",
    height: "44px",
    color: "#FC842D",
    backgroundColor: "white",
    fontSize: "14px",
    lineHeight: "17.01px",
    letterSpacing: "4%",
    fontWeight: "700",
    borderRadius: "30px",
    border: "2px solid #FC842D",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#FC842D",
      color: "white",
    },
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "100%",
    flexDirection: "row",
  },
  "@media (min-width: 1280px)": {
    width: "100%",
    flexDirection: "row",
  },
});

import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const DiaryHeader = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "20px",
  "& p": {
    color: "black",
    fontSize: "18px",
    linHeight: "21.88px",
    fontWeight: "bold",
  },
});

export const DiaryFoodTable = styled(Box)({
  width: "100%",
  maxHeight: "220px",
  overflowY: "auto",
});

export const AddFoodItem = styled(Box)({
  width: "100%",
  height: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& div": {
    width: "48px",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "solid 2px #FC842D ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      fill: "#FC842D",
    },
    "&:hover": {
      backgroundColor: "#FC842D",
      "& svg": {
        fill: "white",
      },
    },
  },
});

export const DiaryContentTable = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  backgroundColor: "#F0F1F3",
});

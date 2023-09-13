import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const LoginNavContainer = styled(Box)({
  width: "100%",
  height: "50px",
  backgroundColor: "#EFF1F3",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "1rem",
  "& p": {
    color: "black",
    paddingRight: "16px",
    fontWeight: "700",
    fontSize: "17px",
    letterSpacing: "4%",
    textTransform: "capitalize",
  },
});

export const LogOutContainer = styled(Box)({
  borderLeft: "solid 2px #E0E0E0",
  width: "20%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& p": {
    color: "#9B9FAA !important",
    "&:hover": {
      cursor: "pointer",
      color: "black !important",
    },
  },
});

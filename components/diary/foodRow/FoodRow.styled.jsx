import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Row = styled(Box)({
  margin: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "8px",
  "& div": {
    borderBottom: "solid 2px #E0E0E0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    height: "24px",
    "& p": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17.01px",
      letterSpacing: "4%",
    },
  },
});

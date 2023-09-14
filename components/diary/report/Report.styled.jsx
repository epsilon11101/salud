import { styled } from "@mui/system";
import { Box } from "@mui/material";
import sheet from "/public/assets/sheet.png";
import tabletSheet from "/public/assets/tabletSheet.png";

export const ReportContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  backgroundColor: "transparent",
  margin: "32px 0",
  "@media (min-width: 768px) and (max-width: 1279px)": {
    margin: "0",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    background: ` right center / 30%   no-repeat url(${tabletSheet.src})`,
    backgroundColor: "#F0F1F3",
    position: "absolute",
    top: "100%",
    left: "0%",
    height: "40%",
  },
  "@media (min-width: 1280px)": {
    marginTop: "0",
    paddingTop: "5%",
    position: "absolute",
    width: "43%",
    height: "100%",
    zIndex: "-1",
    top: "0",
    right: "0",
    backgroundColor: "#F0F1F3",
    backgroundImage: `url(${sheet.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

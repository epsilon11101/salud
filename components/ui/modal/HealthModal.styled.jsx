import { styled } from "@mui/system";
import { Box, Modal } from "@mui/material";

export const ModalContainer = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
export const ModalContent = styled(Box)({
  width: "95%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white",
  textAlign: "center",
  gap: "1rem",
  position: "relative",

  "& h3:first-of-type": {
    marginTop: "2rem",
    color: "black",
    fontSize: "18px",
    lineHeight: "25.2px",
  },
  "& h3": {
    fontSize: "48px",
    fontWeight: "800",
    color: "#264061",
    "& span": {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "19.45px",
    },
  },
  "& h4": {
    color: "black",
    weight: "700",
    fontSize: "14px",
    linHeight: "17.01px",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "50%",
  },
  "@media (min-width: 1280px)": {
    width: "50%",
  },
});

export const ModalInfo = styled(Box)({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& ol": {
    width: "100%",
    maxHeight: "150px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    gap: "0.5rem",
  },
});

export const CloseModal = styled(Box)({
  position: "absolute",
  top: "5px",
  right: "5px",
  "& svg": {
    color: "black",
    "&:hover": {
      cursor: "pointer",
      color: "#9B9FAA",
    },
  },
});

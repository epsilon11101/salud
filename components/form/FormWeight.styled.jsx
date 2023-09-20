import { styled } from "@mui/system";

import {
  Box,
  RadioGroup,
  Radio,
  Button,
  FormControlLabel,
  TextField,
} from "@mui/material";

export const FormContainer = styled(Box)({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "32px",
  "& h2": {
    fontSize: "18px !important",
    fontWeight: "700",
    minWidth: "100%",
    weight: "700",
    color: "black",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {
    alignItems: "flex-start",
    maxHeight: "343px",
    marginTop: "2rem",
    width: "90%",
    "& h2": {
      fontSize: "32px !important",
      letterSpacing: "4%",
      fontWeight: "700",
    },
  },
  "@media (min-width: 1280px)": {
    alignItems: "flex-start",
    width: "608px",
    maxHeight: "343px",
    marginTop: "5rem",
    width: "60%",

    "& h2": {
      fontSize: "32px !important",
      letterSpacing: "4%",
      fontWeight: "700",
    },
  },
});

export const FormWeightContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "@media (min-width: 768px) and (max-width: 1279px)": {
    flexDirection: "row",
  },
  "@media (min-width: 1280px)": {
    flexDirection: "row",
  },
});

export const FieldContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "90%",
  gap: "32px",
});

export const TextFielContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  "& span": {
    color: "red",
    fontSize: "0.8rem",
  },
  "@media (min-width: 768px) and (max-width: 1279px)": {},
  "@media (min-width: 1280px)": {},
});

export const RadioGroupStyled = styled(RadioGroup)({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const ButtonStyled = styled(Button)({
  backgroundColor: "#FC842D !important",
  width: "210px",
  height: "43px",
  borderRadius: "30px",
  fontSize: "12px",
  lineHeight: "17.01px",
  letterSpacing: "4%",
});

export const FormControlLabelStyled = styled(FormControlLabel)({
  "& .MuiRadio-root.Mui-checked,& .MuiRadio-root.Mui-checked + .MuiTypography-root ":
    {
      color: "#FF5733 ",
    },
});

export const TextFieldStyled = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5733 ",
  },
  "& .MuiInputBase-input:focus,& .MuiInputLabel-root.Mui-focused": {
    color: "#FF5733 ",
  },
});

export const ButtonContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 768px) and (max-width: 1279px)": {},
  "@media (min-width: 1280px)": {
    justifyContent: "flex-end",
  },
});

export const TextContainer = styled(Box)({
  width: "85%",
  height: "50px",
  "@media (min-width: 768px) and (max-width: 1279px)": {
    width: "75%",
    height: "85px",
  },
  "@media (min-width: 1280px)": {
    width: "55%",
    height: "85px",
  },
});

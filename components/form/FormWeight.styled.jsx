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
  alignItems: "center",
  gap: "32px",
  "& h2": {
    width: "90%",
    weight: "700",
    size: "18px",
    lineHeight: "25.2px",
    color: "black",
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

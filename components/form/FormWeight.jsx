"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormLabel, Radio, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import {
  FormContainer,
  FieldContainer,
  RadioGroupStyled,
  ButtonStyled,
  TextFieldStyled,
  TextFielContainer,
  FormControlLabelStyled,
} from "./FormWeight.styled";

import HealthModal from "../ui/modal/HealthModal";

const formField = ["Altura", "Edad", "Peso Actual", "Peso Deseado"];
const validationSchema = {
  Altura: {
    required: "La altura es requerida",
  },
  Edad: {
    required: "La edad es requerida",
  },
  "Peso Actual": {
    required: "El peso actual es requerido",
  },
  "Peso Deseado": {
    required: "El peso deseado es requerido",
  },
};

const FormWeight = () => {
  const [onOpen, setOnOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOnOpen(true);
    console.log(data);
  };

  const onCloseModal = (isOpen) => {
    setOnOpen(isOpen);
  };

  return (
    <>
      <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" component="h2">
          Calcula tu ingesta daria de calorías ahora mismo
        </Typography>
        <FieldContainer>
          {formField.map((field) => (
            <TextFielContainer key={nanoid()}>
              <TextFieldStyled
                id={field}
                label={field}
                variant="standard"
                {...register(field, {
                  required: true,
                })}
              />
              {errors[field] && (
                <span key={nanoid()}>{validationSchema[field].required}</span>
              )}
            </TextFielContainer>
          ))}
        </FieldContainer>
        <FieldContainer>
          <FormLabel id="radio-buttons-group-label">Grupo sanguineo</FormLabel>
          <Controller
            name="bloodGroup"
            control={control}
            defaultValue="1"
            render={({ field }) => (
              <RadioGroupStyled
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
                {...field}
              >
                <FormControlLabelStyled
                  value="1"
                  control={<Radio />}
                  label="1"
                />
                <FormControlLabelStyled
                  value="2"
                  control={<Radio />}
                  label="2"
                />
                <FormControlLabelStyled
                  value="3"
                  control={<Radio />}
                  label="3"
                />
                <FormControlLabelStyled
                  value="4"
                  control={<Radio />}
                  label="4"
                />
              </RadioGroupStyled>
            )}
          />
        </FieldContainer>

        <ButtonStyled type="submit" variant="contained">
          Comienza a perder peso
        </ButtonStyled>
      </FormContainer>

      {onOpen && <HealthModal openModal={onOpen} closeModal={onCloseModal} />}
    </>
  );
};

export default FormWeight;

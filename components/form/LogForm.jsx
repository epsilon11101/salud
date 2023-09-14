"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFielContainer, TextFieldStyled } from "./FormWeight.styled";
import { FormContainer, ButtonContainer } from "./LogForm.styled";
const LogForm = ({ title, isLogin }) => {
  const [emptyFields, setEmptyFields] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" component="p">
        {title}
      </Typography>
      {!isLogin && (
        <TextFielContainer>
          <TextFieldStyled
            id="name"
            label="Nombre"
            variant="standard"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span>nombre es requerido</span>}
        </TextFielContainer>
      )}
      <TextFielContainer>
        <TextFieldStyled
          id="email"
          label="Correo Electrónico"
          variant="standard"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <span>correo electronico es requerido</span>}
      </TextFielContainer>
      <TextFielContainer>
        <TextFieldStyled
          id="password"
          label="Contraseña"
          variant="standard"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && <span>contraseña es requerida</span>}
      </TextFielContainer>
      <ButtonContainer>
        <Button type="submit">
          {isLogin ? "INICIAR SESIÓN" : "CREAR UNA CUENTA"}
        </Button>
        <Button type="submit">
          {isLogin ? "CREAR UNA CUENTA" : "INICIAR SESIÓN"}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LogForm;

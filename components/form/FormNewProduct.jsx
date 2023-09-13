"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { TextFielContainer, TextFieldStyled } from "./FormWeight.styled";
import { ButtonContainer, FormContainer } from "./LogForm.styled";

const FormNewProduct = () => {
  const router = useRouter();
  const [isEnableToSend, SetIsEnableToSend] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const product_name = watch("product");
    const grams = watch("grams");
    SetIsEnableToSend(product_name !== "" && grams !== "");
  }, [watch("product"), watch("grams")]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onRedirectHandler = () => {
    router.push(`/diary`, { shallow: true });
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextFielContainer>
        <TextFieldStyled
          id="product"
          label="Ingresa el nombre del producto"
          variant="standard"
          {...register("product", {
            required: true,
          })}
        />
        {errors.product && <span>Nombre del producto requerido</span>}
      </TextFielContainer>
      <TextFielContainer>
        <TextFieldStyled
          id="grams"
          label="Gramos"
          variant="standard"
          {...register("grams", {
            required: true,
          })}
        />
        {errors.grams && <span>Gramos requeridos</span>}
      </TextFielContainer>
      <ButtonContainer
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          type={isEnableToSend ? "submit" : "button"}
          onClick={onRedirectHandler}
        >
          {isEnableToSend ? "Add" : "Cancel"}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormNewProduct;

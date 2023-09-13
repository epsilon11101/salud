"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormLabel, Radio, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContentTable from "../diary/contentTable/ContentTable";
import ContentRow from "../diary/contentTable/ContentRow";
import { DiaryContentTable } from "../diary/Diary.styled";

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

const FormWeight = (isLogin) => {
  const router = useRouter();
  const [onOpen, setOnOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      router.push("/diary", { shallow: true });
    } else {
      setOnOpen(true);
    }
    console.log(data);
  };

  const onCloseModal = (isOpen) => {
    setOnOpen(isOpen);
    router.push("/new-account", { shallow: true });
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

      {onOpen && !isLogin && (
        <HealthModal openModal={onOpen} closeModal={onCloseModal} />
      )}

      {isLogin && (
        <DiaryContentTable sx={{ marginTop: "2rem" }}>
          <ContentTable title="Resumen para el 13.08.20">
            <ContentRow
              content_info="quedan"
              value="625"
              units="kcal"
              isInformative
            />
            <ContentRow
              content_info="consumido"
              value="2175"
              units="kcal"
              isInformative
            />
            <ContentRow
              content_info="tasa diaria"
              value="2800"
              units="kcal"
              isInformative
            />
            <ContentRow
              content_info="n% de lo normal"
              value="78"
              units="%"
              isInformative
            />
          </ContentTable>
          <ContentTable title="Alimentos no recomendados">
            <ContentRow content_info="productos de harina" />
            <ContentRow content_info="leche" />
            <ContentRow content_info="carne roja" />
            <ContentRow content_info="carnes ahumadas" />
          </ContentTable>
        </DiaryContentTable>
      )}
    </>
  );
};

export default FormWeight;

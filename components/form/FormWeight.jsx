"use client";

import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormLabel, Radio, Typography, Box } from "@mui/material";
import { nanoid } from "nanoid";
import Image from "next/image";
import ContentTable from "../diary/contentTable/ContentTable";
import ContentRow from "../diary/contentTable/ContentRow";
import { DiaryContentTable } from "../diary/Diary.styled";

import {
  FormContainer,
  FormWeightContainer,
  FieldContainer,
  RadioGroupStyled,
  ButtonStyled,
  TextFieldStyled,
  TextFielContainer,
  ImageContainer,
  FormControlLabelStyled,
  ButtonContainer,
  TextContainer,
} from "./FormWeight.styled";

import HealthModal from "../ui/modal/HealthModal";

const FormWeight = ({ islogin }) => {
  const router = useRouter();
  const [onOpen, setOnOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (islogin) {
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

  const mobile = useMediaQuery("(max-width:767px)");

  return (
    <>
      {/* {mobile && (
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
            <FormLabel id="radio-buttons-group-label">
              Grupo sanguineo
            </FormLabel>
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
      )} */}

      {/* {islogin && mobile && (
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
      )} */}

      <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextContainer>
          <Typography variant="h3" component="h2">
            Calcula tu ingesta diaria de calorias ahora mismo
          </Typography>
        </TextContainer>
        <FormWeightContainer>
          <FieldContainer>
            <TextFielContainer>
              <TextFieldStyled
                id={"height"}
                label={"Altura"}
                variant="standard"
                {...register("height", {
                  required: true,
                })}
              />
              {errors.height && <span>Altura requerida</span>}
            </TextFielContainer>
            <TextFielContainer>
              <TextFieldStyled
                id={"age"}
                label={"Edad"}
                variant="standard"
                {...register("age", {
                  required: true,
                })}
              />
              {errors.age && <span>Edad requerida</span>}
            </TextFielContainer>
            <TextFielContainer>
              <TextFieldStyled
                id={"weight"}
                label={"Peso Actual"}
                variant="standard"
                {...register("weight", {
                  required: true,
                })}
              />
              {errors.weight && <span>Peso requerido</span>}
            </TextFielContainer>
          </FieldContainer>
          <FieldContainer sx={{ justifyContent: "flex-start" }}>
            <TextFielContainer>
              <TextFieldStyled
                id={"desiredWeight"}
                label={"Peso deseado"}
                variant="standard"
                {...register("desiredWeight", {
                  required: true,
                })}
              />
              {errors.desiredWeight && <span>Peso deseado requerido</span>}
            </TextFielContainer>
            <Box>
              <FormLabel id="radio-buttons-group-label">
                Grupo sanguineo
              </FormLabel>
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
            </Box>
          </FieldContainer>
        </FormWeightContainer>
        <ButtonContainer>
          <ButtonStyled type="submit" variant="contained">
            Comienza a perder peso
          </ButtonStyled>
        </ButtonContainer>
      </FormContainer>
      {/* IMAGE */}

      {onOpen && !islogin && (
        <HealthModal openModal={onOpen} closeModal={onCloseModal} />
      )}
    </>
  );
};

export default FormWeight;

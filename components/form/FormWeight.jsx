"use client";

import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormLabel, Radio, Typography, Box } from "@mui/material";

//CUSTOM HOOKS
import { useUser } from "@/hooks/useUser";
import { useDay } from "@/hooks/useDay";

import {
  FormContainer,
  FormWeightContainer,
  FieldContainer,
  RadioGroupStyled,
  ButtonStyled,
  TextFieldStyled,
  TextFielContainer,
  FormControlLabelStyled,
  ButtonContainer,
  TextContainer,
} from "./FormWeight.styled";

import HealthModal from "../ui/modal/HealthModal";

const FormWeight = () => {
  const { usePostDay: postDay } = useDay();

  const {
    loading: isLoading,
    userData,
    useDailyRate: getDailyRate,
    isAuth,
    useUpdateDailyRate: updateDailyRate,
  } = useUser();

  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const [onOpen, setOnOpen] = useState(false);
  const [updateDay, setUpdateDay] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      weight: userData?.weight || 0,
      desiredWeight: userData?.desiredWeight || 0,
      groupBlood: userData?.groupBlood || "1",
      height: userData?.height || 0,
      age: userData?.age || 0,
    },
  });

  useEffect(() => {
    if (isAuth) {
      setValue("weight", userData.weight);
      setValue("desiredWeight", userData.desiredWeight);
      setValue("groupBlood", userData.groupBlood);
      setValue("height", userData.height);
      setValue("age", userData.age);
    }
  }, [isAuth]);

  useEffect(() => {
    if (hasMounted && !isLoading && !isAuth) {
      setOnOpen(true);
    } else {
      setHasMounted(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!updateDay) return;
    const day_data = {
      date: new Date().toISOString().slice(0, 10),
      // ! aqui falta agregar los productos si esque agrego
      products: [],
    };
    postDay(day_data);
    setUpdateDay(false);
  }, [updateDay, userData]);

  const onSubmit = async (data) => {
    if (isAuth) {
      await updateDailyRate(data);
      setUpdateDay(true);
    } else {
      getDailyRate(data);
    }
  };
  const onCloseModal = (isOpen) => {
    setOnOpen(isOpen);
  };

  return (
    <>
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
                type="number"
                variant="standard"
                {...register("height", {
                  required: {
                    value: true,
                    message: "Altura requerida",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Altura debe ser un numero",
                  },
                  min: {
                    value: 1,
                    message: "La altura debe ser mayor a 1",
                  },
                  max: {
                    value: 250,
                    message: "La altura debe ser menor a 300",
                  },
                })}
              />
              {errors.height && <span>{errors.height.message}</span>}
            </TextFielContainer>
            <TextFielContainer>
              <TextFieldStyled
                id={"age"}
                label={"Edad"}
                variant="standard"
                type="number"
                {...register("age", {
                  required: {
                    value: true,
                    message: "Edad requerida",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Edad debe ser un numero",
                  },
                  min: {
                    value: 1,
                    message: "La edad debe ser mayor a 1",
                  },
                  max: {
                    value: 120,
                    message: "La edad debe ser menor a 120",
                  },
                })}
              />
              {errors.age && <span>{errors.age.message}</span>}
            </TextFielContainer>
            <TextFielContainer>
              <TextFieldStyled
                id={"weight"}
                label={"Peso Actual"}
                type="number"
                variant="standard"
                {...register("weight", {
                  required: {
                    value: true,
                    message: "Peso requerido",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Peso debe ser un numero",
                  },
                  min: {
                    value: 1,
                    message: "El peso debe ser mayor a 1",
                  },
                  max: {
                    value: 300,
                    message: "El peso debe ser menor a 300",
                  },
                })}
              />
              {errors.weight && <span>{errors.weight.message}</span>}
            </TextFielContainer>
          </FieldContainer>
          <FieldContainer sx={{ justifyContent: "flex-start" }}>
            <TextFielContainer>
              <TextFieldStyled
                id={"desiredWeight"}
                label={"Peso deseado"}
                type="number"
                variant="standard"
                {...register("desiredWeight", {
                  required: {
                    value: true,
                    message: "Peso deseado requerido",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Peso deseado debe ser un numero",
                  },
                  min: {
                    value: 1,
                    message: "El peso deseado debe ser mayor a 1",
                  },
                  max: {
                    value: 300,
                    message: "El peso deseado debe ser menor a 300",
                  },
                })}
              />
              {errors.desiredWeight && (
                <span>{errors.desiredWeight.message}</span>
              )}
            </TextFielContainer>
            <Box>
              <FormLabel id="radio-buttons-group-label">
                Grupo sanguineo
              </FormLabel>
              <Controller
                name="groupBlood"
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

      {onOpen && !isAuth && (
        <HealthModal openModal={onOpen} closeModal={onCloseModal} />
      )}
    </>
  );
};

export default FormWeight;

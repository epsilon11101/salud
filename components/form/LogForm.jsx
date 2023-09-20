"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFielContainer, TextFieldStyled } from "./FormWeight.styled";
import { FormContainer, ButtonContainer } from "./LogForm.styled";
//CUSTOM HOOKS
import { useUser } from "@/hooks/useUser";
import { useDay } from "@/hooks/useDay";

const LogForm = ({ title, isLogin }) => {
  const router = useRouter();
  const currentPath = usePathname();

  const {
    useLogIn: signIn,
    useSignUp: signUp,
    error: userErrors,
    userData,
    isAuth,
  } = useUser();
  const {
    useUpdateDay: updateDay,
    usePostDay: postDay,
    products: dayProducts,
    useRestoreDay: restoreDay,
    useGetDayPromises: getDay,
  } = useDay();

  useEffect(() => {
    const findDay = async () => {
      if (!isAuth) return;
      //buscar dia
      const day = await getDay(new Date().toISOString().slice(0, 10));
      if (!day) {
        //si no existe dia se crea
        restoreDay();
        const day_data = {
          date: new Date().toISOString().slice(0, 10),
          products: dayProducts,
        };
        postDay(day_data);
      }
      router.push("/calculator", { shallow: true });
    };

    findDay();
  }, [isAuth]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRedirectHandler = () => {
    const redirectTo =
      currentPath === "/new-account" ? "/login" : "/new-account";

    router.push(redirectTo, {
      shallow: true,
    });
  };

  const onSubmit = (data) => {
    // create new account

    if (!isLogin) {
      data = {
        ...data,
        weight: userData?.weight || 0,
        desiredWeight: userData?.desiredWeight || 0,
        groupBlood: userData?.groupBlood || "1",
        height: userData?.height || 0,
        age: userData?.age || 0,
      };

      signUp(data);

      return;
    }
    //sign in

    signIn(data);
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" component="p">
        {!userErrors ? title : userErrors}
      </Typography>
      {!isLogin && (
        <TextFielContainer>
          <TextFieldStyled
            id="name"
            label="Nombre"
            variant="standard"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Nombre sin simbolos",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
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
          type="password"
          label="Contraseña"
          variant="standard"
          {...register("password", {
            required: true,
            minLength: {
              value: 5,
              message: "Contraseña muy corta",
            },
            maxLength: {
              value: 12,
              message: "Contraseña muy larga",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </TextFielContainer>
      <ButtonContainer>
        <Button type="submit">
          {isLogin ? "INICIAR SESIÓN" : "CREAR UNA CUENTA"}
        </Button>
        <Button type="button" onClick={onRedirectHandler}>
          {isLogin ? "CREAR UNA CUENTA" : "INICIAR SESIÓN"}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LogForm;

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ButtonStyled } from "@/components/form/FormWeight.styled";
import {
  ModalContainer,
  ModalContent,
  ModalInfo,
  CloseModal,
} from "./HealthModal.styled";

//REDUX IMPORTS

//CUSTOM HOOKS
import { useUser } from "@/hooks/useUser";
import { nanoid } from "nanoid";

const HealthModal = ({ openModal, closeModal }) => {
  const router = useRouter();
  const { userData } = useUser();

  const [open, setOpen] = useState(openModal);

  const closeModalHandler = () => {
    setOpen(false);
    closeModal(false);
  };
  const onRegisterHandler = () => {
    router.push("/new-account", { shallow: true });
  };

  return (
    <ModalContainer
      open={open}
      onClose={closeModalHandler}
      aria-labelledby="consderations-modal"
      aria-describedby="description about your health"
    >
      <ModalContent>
        <Typography variant="h6" component="h3">
          Tu ingesta diaria recomendada de calorías es:
        </Typography>
        <Typography variant="h1" component="h3">
          {userData.dailyRate} <span>kcal</span>
        </Typography>
        <ModalInfo>
          <Typography variant="h6" component="h4">
            Alimentos que no deberías comer
          </Typography>

          <ol>
            {userData.notAllowedProducts &&
              userData.notAllowedProducts.map((product) => (
                <li key={nanoid()}>{product}</li>
              ))}
          </ol>
        </ModalInfo>
        <ButtonStyled
          type="submit"
          variant="contained"
          onClick={onRegisterHandler}
        >
          Comienza a perder peso
        </ButtonStyled>
        <CloseModal>
          <CloseIcon onClick={closeModalHandler} />
        </CloseModal>
      </ModalContent>
    </ModalContainer>
  );
};

export default HealthModal;

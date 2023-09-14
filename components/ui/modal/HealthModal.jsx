"use client";
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

const HealthModal = ({ openModal, closeModal }) => {
  const [open, setOpen] = useState(openModal);

  const closeModalHandler = () => {
    setOpen(false);
    closeModal(false);
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
          2800 <span>kcal</span>
        </Typography>
        <ModalInfo>
          <Typography variant="h6" component="h4">
            Alimentos que no deberías comer
          </Typography>

          <ol>
            <li>Productos de harina</li>
            <li>Leche</li>
            <li>Carne roja</li>
            <li>Carnes ahumadas</li>
          </ol>
        </ModalInfo>
        <ButtonStyled type="submit" variant="contained">
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

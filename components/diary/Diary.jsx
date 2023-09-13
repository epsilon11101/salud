"use client";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import FoodRow from "./foodRow/FoodRow";
import ContentTable from "./contentTable/ContentTable";
import ContentRow from "./contentTable/ContentRow";

import {
  DiaryHeader,
  DiaryFoodTable,
  AddFoodItem,
  DiaryContentTable,
} from "./Diary.styled";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";

const Diary = () => {
  const router = useRouter();
  const onRedirectHandler = () => {
    router.push(`/new-product`, { shallow: true });
  };

  return (
    <>
      <DiaryHeader>
        <Typography variant="h5" component="p">
          13.08.2023
        </Typography>
        <CalendarMonthIcon />
      </DiaryHeader>
      <DiaryFoodTable>
        <FoodRow food="Berenjena1" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena" grams="100" kcal="320" />
        <FoodRow food="Berenjena10" grams="100" kcal="320" />
      </DiaryFoodTable>
      <AddFoodItem>
        <Box onClick={onRedirectHandler}>
          <AddIcon />
        </Box>
      </AddFoodItem>
      <DiaryContentTable>
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
    </>
  );
};

export default Diary;

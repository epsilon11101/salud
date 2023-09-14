"use client";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import FoodRow from "./foodRow/FoodRow";
import ContentTable from "./contentTable/ContentTable";
import ContentRow from "./contentTable/ContentRow";
import Report from "./report/Report";

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
      <Report />
    </>
  );
};

export default Diary;

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Box, Typography } from "@mui/material";
import FoodRow from "./foodRow/FoodRow";
import Report from "./report/Report";
import Calendar from "../calendar/Calendar";

import {
  DiaryHeader,
  DiaryFoodTable,
  AddFoodItem,
  DiaryWrapper,
} from "./Diary.styled";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";

const Diary = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString());
  const router = useRouter();

  const onRedirectHandler = () => {
    router.push(`/new-product`, { shallow: true });
  };

  const onOpenCalendarHandler = () => {
    setOpenCalendar(!openCalendar);
  };

  const getTodayDate = (date) => {
    setTodayDate(date);
  };

  return (
    <DiaryWrapper>
      <DiaryHeader>
        <Typography variant="h5" component="p">
          {todayDate}
        </Typography>
        <CalendarMonthIcon onClick={onOpenCalendarHandler} />
        {openCalendar && <Calendar selectDate={getTodayDate} />}
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
    </DiaryWrapper>
  );
};

export default Diary;

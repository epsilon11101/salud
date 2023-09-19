"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

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

//CUSTOM HOOKS
import useDay from "@/hooks/useDay";

const Diary = () => {
  const { useGetDay: getCurrentDay, day, products } = useDay();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [todayDate, setTodayDate] = useState(
    dayjs(new Date().toISOString()).format("YYYY-MM-DD")
  );
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const isPastDate =
    todayDate === dayjs(new Date().toISOString()).format("YYYY-MM-DD");

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    getCurrentDay(todayDate);
  }, [todayDate]);

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
        {openCalendar && (
          <Calendar selectDate={getTodayDate} onOpen={onOpenCalendarHandler} />
        )}
      </DiaryHeader>
      <DiaryFoodTable>
        {products?.length > 0 ? (
          products?.map((product) => (
            <FoodRow
              key={product._id}
              product_info={product}
              date={todayDate}
              isPastDate={isPastDate}
            />
          ))
        ) : (
          <Typography variant="h5" component="p">
            No tienes productos añadidos
          </Typography>
        )}
      </DiaryFoodTable>

      {isPastDate && (
        <AddFoodItem>
          <Box onClick={onRedirectHandler}>
            <AddIcon />
          </Box>
        </AddFoodItem>
      )}
      <Report />
    </DiaryWrapper>
  );
};

export default Diary;

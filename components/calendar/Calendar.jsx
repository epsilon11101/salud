"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calendar({ selectDate, onOpen }) {
  const [date, setDate] = useState(dayjs());

  const onSelectDateHandler = (date) => {
    setDate(date);
    selectDate(date?.format("YYYY-MM-DD") || dayjs().format("YYYY-MM-DD"));
    onOpen();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar disableFuture value={date} onChange={onSelectDateHandler} />
    </LocalizationProvider>
  );
}

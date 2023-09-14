"use client";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calendar({ selectDate }) {
  const onSelectDateHandler = (date) => {
    selectDate(dayjs(date).format("DD/MM/YYYY"));
  };
  //convert to dayjs

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar disableFuture onChange={onSelectDateHandler} />
    </LocalizationProvider>
  );
}

import React from "react";
import dayjs from "dayjs";

const useCallsLength = (calls) => {
  
  const transformDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const dateToday = dayjs().format("YYYY-MM-DD");
  const callsArrayToday = calls.filter(
    (call) => transformDate(call.date) === dateToday
  );
  const callsTodayLength = callsArrayToday.length;

  const dateYesterday = dayjs().add(-1, "day").format("YYYY-MM-DD");
  const callsArrayYesterday = calls.filter(
    (call) => transformDate(call.date) === dateYesterday
  );
  const callsYesterdayLength = callsArrayYesterday.length;
  return {
    callsArrayToday,
    callsTodayLength,
    callsArrayYesterday,
    callsYesterdayLength,
  };
};

export default useCallsLength;

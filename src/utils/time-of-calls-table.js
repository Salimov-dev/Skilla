import dayjs from "dayjs";

export const timeOfCallsTable = ({ date }) => {
    const time = dayjs(date).format("HH:mm");
    return time;
  };

import dayjs from "dayjs";
import "dayjs/locale/ru"

const useLocalDate = () => {
  const dateNow = dayjs().locale("ru").format("dddd, DD MMM");
  const editedDateNow =
    dateNow.charAt(0).toUpperCase() + dateNow.slice(1).slice(0, -1);
    return editedDateNow
};

export default useLocalDate;

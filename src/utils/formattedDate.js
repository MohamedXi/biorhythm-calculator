import dayjs from "dayjs";

export const formattedDateDayMonth = (date) => {
  return dayjs(date).format('DD MMM');
}

export const formattedDateDayMonthYear = (date) => {
  return dayjs(date).format('DD MMM YYYY');
}

export const formattedDateMonthYear = (date) => {
  return dayjs(date).format('MMM YYYY');
}
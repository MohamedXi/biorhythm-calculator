import dayjs from "dayjs";
import { formattedDateDayMonth } from "./formattedDate";

function calculationBiorhythm(dateOfBirth, targetDate, cycle) {
  const birthDay = dayjs(dateOfBirth).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'day');

  return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculationBiorhythms(dateOfBirth, targetDate) {
  return {
    date: formattedDateDayMonth(targetDate),
    physical: calculationBiorhythm(dateOfBirth, targetDate, 23),
    emotional: calculationBiorhythm(dateOfBirth, targetDate, 28),
    intellectual: calculationBiorhythm(dateOfBirth, targetDate, 33),
  };
}

/**
 *  Calculates the biorhythm series for a given date range.
 * 
 * @param {*} dateOfBirth Date of birth in ISO format.
 * @param {*} startDate Start date in ISO format.
 * @param {*} size Number of days to calculate.
 * @returns {Array} Array of biorhythm values.
 */
export function calculationBiorhythmSeries(dateOfBirth, startDate, size) {
  const series = [];
  const startDay = dayjs(startDate).startOf('day');

  for (let i = 0; i < size; i++) {
    const targetDay = startDay.add(i, 'days').toISOString();
    series.push(calculationBiorhythms(dateOfBirth, targetDay));
  }

  return series;
}
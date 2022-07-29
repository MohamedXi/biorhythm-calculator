import dayjs from "dayjs";

function calculationBiorhythm(dateOfBirth, targetDate, cycle) {
  const birthDay = dayjs(dateOfBirth).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'day');

  return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculationBiorhythms(dateOfBirth, targetDate) {
  return {
    physical: calculationBiorhythm(dateOfBirth, targetDate, 23),
    emotional: calculationBiorhythm(dateOfBirth, targetDate, 28),
    intellectual: calculationBiorhythm(dateOfBirth, targetDate, 33),
  };
}
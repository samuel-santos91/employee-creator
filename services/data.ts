interface InputData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  dayStart: string;
  monthStart: string;
  yearStart: string;
  dayEnd: string;
  monthEnd: string;
  yearEnd: string;
  ongoing: string;
  type: string;
  hoursPerWeek: string;
}

export const refactorData = (data: InputData) => {
  const {
    dayStart,
    monthStart,
    yearStart,
    dayEnd,
    monthEnd,
    yearEnd,
    ...rest
  } = data;

  const startDate = `${data.yearStart}-${
    data.monthStart
  }-${data.dayStart.padStart(2, "0")}`;
  const finishDate = `${data.yearEnd}-${data.monthEnd}-${data.dayEnd.padStart(
    2,
    "0"
  )}`;

  const newData = { startDate: startDate, finishDate: finishDate, ...rest };
  return newData;
};

import { UseFormSetValue } from "react-hook-form";

interface InputData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  status: string;
  dayStart: string;
  monthStart: string;
  yearStart: string;
  dayEnd: string;
  monthEnd: string;
  yearEnd: string;
  ongoing?: string;
  type: string;
  hoursPerWeek?: string;
}

interface EmployeeData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  status: string;
  startDate: string;
  finishDate: string;
  ongoing?: string;
  type: string;
  hoursPerWeek?: string;
}

export const joinDate = (data: InputData): EmployeeData => {
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

export const spreadDate = (
  res: EmployeeData,
  setValue: UseFormSetValue<InputData>
): void => {
  Object.keys(res).forEach((key) => {
    if (key !== "startDate" && key !== "finishDate") {
      setValue(key as keyof InputData, res[key as keyof EmployeeData]);
    }
  });

  const startDateComponents = res.startDate.split("T")[0].split("-");
  setValue("yearStart", startDateComponents[0]);
  setValue("monthStart", startDateComponents[1]);
  setValue("dayStart", startDateComponents[2]);

  const finishDateComponents = res.finishDate.split("T")[0].split("-");
  setValue("yearEnd", finishDateComponents[0]);
  setValue("monthEnd", finishDateComponents[1]);
  setValue("dayEnd", finishDateComponents[2]);
};

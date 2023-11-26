"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { getEmployeeById } from "@/services/api";
import { editEmployeeDetails } from "@/services/api";
import EmployeeForm from "@/components/EmployeeForm";

interface Inputs {
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

interface EmployeeData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  startDate: string;
  finishDate: string;
  ongoing: string;
  type: string;
  hoursPerWeek: string;
}

export default function EmployeeId({ params }: any) {
  const { register, setValue, handleSubmit } = useForm<Inputs>();

  const fetchData = async () => {
    await getEmployeeById(params.id)
      .then((res) => {
        Object.keys(res).forEach((key) => {
          if (key !== "startDate" && key !== "finishDate") {
            setValue(key as keyof Inputs, res[key]);
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
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

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

    try {
      await editEmployeeDetails(params.id, newData).then((res) =>
        console.log(res)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EmployeeForm
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

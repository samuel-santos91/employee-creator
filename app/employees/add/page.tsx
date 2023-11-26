"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { addEmployee } from "@/services/api";
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

export default function AddEmployee() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const addData = async (data: EmployeeData) => {
    await addEmployee(data)
      .then((res) => {
        console.log(res);
        router.push("/employees");
      })
      .catch((e) => console.log(e));
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
    await addData(newData);
  };

  return (
    <EmployeeForm
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

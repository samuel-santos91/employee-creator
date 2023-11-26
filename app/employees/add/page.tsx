"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { addEmployee } from "@/services/api";
import { refactorData } from "@/services/data";
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
    const employeeData = refactorData(data);
    await addData(employeeData);
  };

  return (
    <EmployeeForm
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

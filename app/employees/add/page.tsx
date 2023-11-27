"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addEmployee } from "@/services/api";
import { joinDate } from "@/services/refactor";
import { schema } from "@/services/yupValidation";
import EmployeeForm from "@/components/EmployeeForm";

interface Inputs {
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
  ongoing?: boolean;
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
  finishDate?: string;
  ongoing?: boolean;
  type: string;
  hoursPerWeek?: string;
}

export default function AddEmployee() {
  const router = useRouter();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs | any>({
    resolver: yupResolver(schema),
  });

  const addData = async (data: EmployeeData) => {
    await addEmployee(data)
      .then((res) => {
        console.log(res);
        router.push("/employees");
      })
      .catch((e) => console.log(e));
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const employeeData = joinDate(data);
    console.log(employeeData)
    await addData(employeeData);
  };

  const isOngoing = watch("ongoing");

  useEffect(() => {
    if (isOngoing) {
      setValue("dayEnd", "");
      setValue("monthEnd", "");
      setValue("yearEnd", "");
    }
  }, [isOngoing, setValue]);

  console.log(errors);

  return (
    <EmployeeForm
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

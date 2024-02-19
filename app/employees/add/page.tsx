"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { PulseLoader } from "react-spinners";

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
  const [loading, setLoading] = useState<boolean>(false);

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
        setLoading(false);

        console.log(res);
        router.push("/employees");
      })
      .catch((e) => console.log(e));
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const employeeData = joinDate(data);
    await addData(employeeData);
  };

  return (
    <>
      {!loading ? (
        <EmployeeForm
          register={register}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      ) : (
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <PulseLoader loading={loading} />
        </span>
      )}
    </>
  );
}

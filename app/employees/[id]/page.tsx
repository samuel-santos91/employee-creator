"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { PulseLoader } from "react-spinners";

import { getEmployeeById } from "@/services/api";
import { editEmployeeDetails } from "@/services/api";
import { joinDate, spreadDate } from "@/services/refactor";
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

export default function EmployeeId({ params }: any) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs | any>({ resolver: yupResolver(schema) });
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);

    await getEmployeeById(params.id)
      .then((res) => {
        setLoading(false);

        spreadDate(res, setValue);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const employeeData = joinDate(data);

    try {
      await editEmployeeDetails(params.id, employeeData).then((res) => {
        setLoading(false);

        console.log(res);
        router.push("/employees");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EmployeeForm
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />

      <PulseLoader loading={loading} />
    </>
  );
}

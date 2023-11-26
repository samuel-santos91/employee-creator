"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { getEmployeeById } from "@/services/api";
import { editEmployeeDetails } from "@/services/api";
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

export default function EmployeeId({ params }: any) {
  const { register, setValue, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const fetchData = async () => {
    await getEmployeeById(params.id)
      .then((res) => {
        Object.keys(res).forEach((key) => {
          if (key !== "startDate" && key !== "finishDate") {
            setValue(key as keyof Inputs, res[key as keyof EmployeeData]);
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
    const employeeData = refactorData(data);

    try {
      await editEmployeeDetails(params.id, employeeData).then((res) => {
        console.log(res);
        router.push("/employees");
      });
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

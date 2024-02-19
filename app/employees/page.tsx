"use client";

import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

import EmployeeDisplay from "@/components/EmployeeDisplay";
import { getEmployees, deleteEmployee } from "@/services/api";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  startDate: string;
  finishDate: string;
}

export default function Employees() {
  const [employeesList, setEmployeesList] = useState<Employee[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    await getEmployees()
      .then((res) => {
        setLoading(false);
        setEmployeesList(res);
      })
      .catch((e) => console.log(e));
  };

  const deleteDataHandler = async (id: number) => {
    await deleteEmployee(id)
      .then((res) => {
        fetchData();
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="mb-10 h-40 bg-gray-50 flex flex-col justify-center">
        <h1 className="mb-3 text-center text-3xl font-bold">
          Employees&#39; List
        </h1>

        <div className="flex justify-center flex-col sm:flex-row items-center text-sm">
          <p className="mr-4 text-center">
            Please click on &#39;<span className="font-bold">Edit</span>&#39; to
            find more details of each employee
          </p>

          <Link href="/employees/add">
            <button className="bg-blue-700 p-3 rounded-lg text-white">
              Add Employee
            </button>
          </Link>
        </div>
      </header>

      <section className="sm:mx-20 mx-10">
        {employeesList?.map((employee) => (
          <EmployeeDisplay
            key={employee.id}
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            status={employee.status}
            email={employee.email}
            startDate={employee.startDate}
            finishDate={employee.finishDate}
            onDelete={() => deleteDataHandler(employee.id)}
          />
        ))}
      </section>

      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
        <PulseLoader loading={loading} />
      </span>
    </>
  );
}

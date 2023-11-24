"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import EmployeeDisplay from "@/components/EmployeeDisplay";
import { getEmployees, deleteEmployee } from "@/services/api";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
}

export default function Employees() {
  const [employeesList, setEmployeesList] = useState<Employee[] | null>(null);

  const fetchData = async () => {
    await getEmployees()
      .then((res) => setEmployeesList(res))
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
  }, []);

  return (
    <>
      <header className="h-40 bg-slate-400 flex">
        <h1 className="m-auto">Employees' List</h1>
      </header>
      <section className="flex justify-center items-center my-10">
        <p className="mr-4">
          Please click on 'Edit' to find more details of each employee
        </p>
        <Link href="/employees/add">
          <button className="bg-blue-700 p-3 rounded-lg text-white">
            Add Employee
          </button>
        </Link>
      </section>
      {employeesList?.map((employee) => (
        <EmployeeDisplay
          key={employee.id}
          id={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          status={employee.status}
          email={employee.email}
          onDelete={() => deleteDataHandler(employee.id)}
        />
      ))}
    </>
  );
}

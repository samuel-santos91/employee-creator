"use client";

import { useEffect, useState } from "react";

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
    <main>
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
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

import EmployeeDisplay from "@/components/EmployeeDisplay";
import { getEmployees } from "@/services/api";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
}

export default function Employees() {
  const [employeesList, setEmployeesList] = useState<Employee[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await getEmployees()
        .then((res) => setEmployeesList(res))
        .catch((e) => console.log(e));
    };

    fetchData();
  }, []);

  return (
    <main>
      {employeesList?.map((employee) => (
        <EmployeeDisplay
          key={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          status={employee.status}
          email={employee.email}
        />
      ))}
    </main>
  );
}

import axios from "axios";

interface EmployeeDataMain {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  startDate: string;
  finishDate: string;
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

const api = axios.create({
  baseURL: "https://employee-creator-server.onrender.com",
});

export const getEmployees = async (): Promise<EmployeeDataMain[]> => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEmployeeById = async (id: number): Promise<EmployeeData> => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEmployee = async (data: EmployeeData): Promise<boolean> => {
  try {
    await api.post("/employees", data);
    return true;
  } catch (error) {
    throw error;
  }
};

export const editEmployeeDetails = async (
  id: number,
  data: EmployeeData
): Promise<boolean> => {
  try {
    await api.patch(`/employees/${id}`, data);
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/employees/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};

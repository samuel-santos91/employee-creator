import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEmployeeById = async (id: number) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEmployee = async (data: any) => {
  try {
    await api.post("/employees", data);
    return true;
  } catch (error) {
    throw error;
  }
};

export const editEmployeeDetails = async (id: number, data: any) => {
  try {
    await api.patch(`/employees/${id}`, data);
    return true;
  } catch (error) {
    throw new Error("Employee Not Found");
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

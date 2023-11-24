import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    console.log(response.data);
    return response.data;
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
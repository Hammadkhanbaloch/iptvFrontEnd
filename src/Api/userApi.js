import axios from "axios";

const API_URL = "http://localhost:4444/user";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
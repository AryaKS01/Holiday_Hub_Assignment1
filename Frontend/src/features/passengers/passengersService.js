import axios from "axios";

const API_URL = "https://holiday-hub-assignment1.vercel.app" + "/passengers";

const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const create = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Failed to create passenger"
    );
  }
};

const update = async (id, passenger) => {
  const formData = new FormData();
  Object.entries(passenger).forEach(([key, value]) => {
    if (value) formData.append(key, value);
  });

  const response = await axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const remove = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default { getAll, create, update, remove };

import axios from "axios";

const API_URL = "http://localhost:5000/passengers";

const createFormData = (passengers) => {
  const formData = new FormData();

  passengers.forEach((passenger, index) => {
    Object.keys(passenger).forEach((key) => {
      if (key === "photo" || key === "idCard") {
        formData.append(`passengers[${index}][${key}]`, passenger[key]);
      } else {
        formData.append(`passengers[${index}][${key}]`, passenger[key]);
      }
    });
  });

  return formData;
};

const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const create = async (passenger) => {
  const formData = new FormData();
  Object.entries(passenger).forEach(([key, value]) => {
    if (value) formData.append(key, value);
  });

  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
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

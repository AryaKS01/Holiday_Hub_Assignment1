import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import passengersService from "./passengersService";

const initialState = {
  passengers: [],
  status: "idle",
  error: null,
};

export const fetchPassengers = createAsyncThunk(
  "passengers/fetchAll",
  async () => await passengersService.getAll()
);

export const createPassengers = createAsyncThunk(
  "passengers/create",
  async (formData) => {
    const response = await passengersService.create(formData);
    return response; // Ensure backend returns created passenger data
  }
);

export const updatePassenger = createAsyncThunk(
  "passengers/update",
  async ({ id, passenger }) => await passengersService.update(id, passenger)
);

export const deletePassenger = createAsyncThunk(
  "passengers/delete",
  async (id) => {
    await passengersService.remove(id);
    return id;
  }
);

const passengersSlice = createSlice({
  name: "passengers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPassengers.fulfilled, (state, action) => {
        state.passengers = action.payload;
      })
      .addCase(createPassengers.fulfilled, (state, action) => {
        state.passengers.push(action.payload); // Add single passenger object
      })
      .addCase(updatePassenger.fulfilled, (state, action) => {
        const index = state.passengers.findIndex(
          (p) => p._id === action.payload._id
        );
        if (index !== -1) state.passengers[index] = action.payload;
      })
      .addCase(deletePassenger.fulfilled, (state, action) => {
        state.passengers = state.passengers.filter(
          (p) => p._id !== action.payload
        );
      });
  },
});

export default passengersSlice.reducer;

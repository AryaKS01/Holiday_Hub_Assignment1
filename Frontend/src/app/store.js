import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "../features/passengers/passengersSlice";

export default configureStore({
  reducer: {
    passengers: passengerReducer,
  },
});

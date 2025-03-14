import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PassengerForm from "./components/PassengerForm";
import PassengerTable from "./components/PassengerTable";
import { fetchPassengers } from "./features/passengers/passengersSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPassengers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8">Passenger Management</h1>
      <PassengerForm />
      <PassengerTable />
    </div>
  );
}

export default App;

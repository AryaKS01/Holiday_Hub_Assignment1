import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PassengerForm from "./components/PassengerForm";
import PassengerTable from "./components/PassengerTable";
import { fetchPassengers } from "./features/passengers/passengersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPassengers());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Passenger Management</h1>
      <PassengerForm />
      <PassengerTable />
    </div>
  );
}

export default App;

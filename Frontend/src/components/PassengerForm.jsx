import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPassengers } from "../features/passengers/passengersSlice";

const PassengerForm = () => {
  const dispatch = useDispatch();
  const [passengers, setPassengers] = useState([
    {
      name: "",
      age: "",
      gender: "Male",
      contact: "",
      email: "",
      photo: null,
      idCard: null,
    },
  ]);

  const handleAddPassenger = () => {
    setPassengers([
      ...passengers,
      {
        name: "",
        age: "",
        gender: "Male",
        contact: "",
        email: "",
        photo: null,
        idCard: null,
      },
    ]);
  };

  const handleChange = (index, e) => {
    const newPassengers = [...passengers];
    newPassengers[index][e.target.name] = e.target.value;
    setPassengers(newPassengers);
  };

  const handleFileChange = (index, e) => {
    const newPassengers = [...passengers];
    newPassengers[index][e.target.name] = e.target.files[0];
    setPassengers(newPassengers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send each passenger individually
      await Promise.all(
        passengers.map((passenger) =>
          dispatch(createPassengers(passenger)).unwrap()
        )
      );
      setPassengers([initialPassengerState]);
    } catch (error) {
      alert("Error creating passengers");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {passengers.map((passenger, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={passenger.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              value={passenger.age}
              onChange={(e) => handleChange(index, e)}
            />
            <select
              name="gender"
              value={passenger.gender}
              onChange={(e) => handleChange(index, e)}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={passenger.contact}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={passenger.email}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="file"
              name="photo"
              accept="image/png"
              onChange={(e) => handleFileChange(index, e)}
              required
            />
            <input
              type="file"
              name="idCard"
              accept="application/pdf"
              onChange={(e) => handleFileChange(index, e)}
              required
            />
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleAddPassenger}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Passenger
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit All
        </button>
      </div>
    </form>
  );
};

export default PassengerForm;

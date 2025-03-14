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
      // Validate all passengers before submission
      const isValid = passengers.every(
        (passenger) =>
          passenger.name &&
          passenger.age > 0 &&
          passenger.photo &&
          passenger.idCard
      );

      if (!isValid) {
        alert("Please fill all required fields for every passenger");
        return;
      }
      // Create an array of dispatch promises
      await Promise.all(
        passengers.map((passenger) => {
          const formData = new FormData();
          Object.entries(passenger).forEach(([key, value]) => {
            if (value) formData.append(key, value);
          });
          return dispatch(createPassengers(formData)).unwrap();
        })
      );

      const initialPassengerState = {
        name: "",
        age: "",
        gender: "Male",
        contact: "",
        email: "",
        photo: null,
        idCard: null,
      };
      setPassengers([initialPassengerState]);
    } catch (error) {
      alert("Error creating passengers: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="passenger-form">
      {passengers.map((passenger, index) => (
        <div key={index} className="form-grid">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={passenger.name}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            className="form-input"
            type="number"
            name="age"
            placeholder="Age"
            required
            value={passenger.age}
            onChange={(e) => handleChange(index, e)}
          />
          <select
            className="form-input form-select"
            name="gender"
            value={passenger.gender}
            onChange={(e) => handleChange(index, e)}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            className="form-input"
            type="text"
            name="contact"
            placeholder="Contact"
            value={passenger.contact}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={passenger.email}
            onChange={(e) => handleChange(index, e)}
          />
          <div className="file-input-wrapper">
            <input
              className="file-input"
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => handleFileChange(index, e)}
              required
            />
            <span className="file-input-label">
              {passenger.photo?.name || "Upload Photo"}
            </span>
          </div>
          <div className="file-input-wrapper">
            <input
              className="file-input"
              type="file"
              name="idCard"
              accept="application/pdf"
              onChange={(e) => handleFileChange(index, e)}
              required
            />
            <span className="file-input-label">
              {passenger.idCard?.name || "Upload ID Card"}
            </span>
          </div>
        </div>
      ))}

      <div className="button-group">
        <button
          type="button"
          onClick={handleAddPassenger}
          className="btn btn-primary"
        >
          Add Passenger
        </button>
        <button type="submit" className="btn btn-success">
          Submit All
        </button>
      </div>
    </form>
  );
};

export default PassengerForm;

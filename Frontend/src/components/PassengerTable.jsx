import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePassenger,
  updatePassenger,
} from "../features/passengers/passengersSlice";

const PassengerTable = () => {
  const dispatch = useDispatch();
  const { passengers } = useSelector((state) => state.passengers);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const filteredPassengers = passengers.filter(
    (passenger) =>
      passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (passenger) => {
    setEditingId(passenger._id);
    setEditData({ ...passenger });
  };

  const handleSave = async () => {
    try {
      await dispatch(
        updatePassenger({
          id: editingId,
          passenger: editData,
        })
      ).unwrap();
      setEditingId(null);
    } catch (error) {
      alert("Error updating passenger");
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search by name or email"
        className="border p-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Photo</th>
            <th className="border p-2">ID Card</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPassengers.map((passenger) => (
            <tr key={passenger._id}>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <input
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  passenger.name
                )}
              </td>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <input
                    type="number"
                    value={editData.age}
                    onChange={(e) =>
                      setEditData({ ...editData, age: e.target.value })
                    }
                  />
                ) : (
                  passenger.age
                )}
              </td>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <select
                    value={editData.gender}
                    onChange={(e) =>
                      setEditData({ ...editData, gender: e.target.value })
                    }
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                ) : (
                  passenger.gender
                )}
              </td>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <input
                    value={editData.contact}
                    onChange={(e) =>
                      setEditData({ ...editData, contact: e.target.value })
                    }
                  />
                ) : (
                  passenger.contact
                )}
              </td>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                  />
                ) : (
                  passenger.email
                )}
              </td>
              <td className="border p-2">
                <img
                  src={`http://localhost:5000/${passenger.photo}`}
                  alt="Passenger"
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border p-2">
                <a
                  href={`http://localhost:5000/${passenger.idCard}`}
                  download
                  className="text-blue-500 hover:underline"
                >
                  Download PDF
                </a>
              </td>
              <td className="border p-2">
                {editingId === passenger._id ? (
                  <button onClick={handleSave} className="text-green-500">
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(passenger)}
                      className="text-blue-500 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deletePassenger(passenger._id))}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerTable;

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
        className="form-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="passenger-table-wrapper">
        <table className="passenger-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Photo</th>
              <th>ID Card</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPassengers.map((passenger) => (
              <tr key={passenger._id}>
                <td>
                  {editingId === passenger._id ? (
                    <input
                      className="form-input"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  ) : (
                    passenger.name
                  )}
                </td>
                <td>
                  {editingId === passenger._id ? (
                    <input
                      className="form-input"
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
                <td>
                  {editingId === passenger._id ? (
                    <select
                      className="form-input form-select"
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
                <td>
                  {editingId === passenger._id ? (
                    <input
                      className="form-input"
                      value={editData.contact}
                      onChange={(e) =>
                        setEditData({ ...editData, contact: e.target.value })
                      }
                    />
                  ) : (
                    passenger.contact
                  )}
                </td>
                <td>
                  {editingId === passenger._id ? (
                    <input
                      className="form-input"
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
                <td>
                  <img
                    src={`http://localhost:5000/${passenger.photo}`}
                    alt="Passenger"
                    className="avatar-img"
                  />
                </td>
                <td>
                  <a
                    href={`http://localhost:5000/${passenger.idCard}`}
                    download
                    className="btn btn-primary"
                  >
                    Download
                  </a>
                </td>
                <td>
                  <div className="flex gap-2">
                    {editingId === passenger._id ? (
                      <button onClick={handleSave} className="btn btn-success">
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(passenger)}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            dispatch(deletePassenger(passenger._id))
                          }
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerTable;

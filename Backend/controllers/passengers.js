const Passenger = require("../models/Passenger");
const fs = require("fs");

const createPassenger = async (req, res) => {
  try {
    // Ensure files are properly received
    console.log("Received files:", req.files);

    const passenger = new Passenger({
      ...req.body,
      photo: req.files.photo[0].path,
      idCard: req.files.idCard[0].path,
    });

    const savedPassenger = await passenger.save();
    res.status(201).json(savedPassenger); // Must return the full object
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePassenger = async (req, res) => {
  try {
    const passenger = await Passenger.findById(req.params.id);
    if (!passenger)
      return res.status(404).json({ error: "Passenger not found" });

    // Update files if provided
    if (req.files.photo) {
      fs.unlinkSync(passenger.photo);
      passenger.photo = req.files.photo[0].path;
    }
    if (req.files.idCard) {
      fs.unlinkSync(passenger.idCard);
      passenger.idCard = req.files.idCard[0].path;
    }

    // Update other fields
    Object.keys(req.body).forEach((key) => {
      passenger[key] = req.body[key];
    });

    await passenger.save();
    res.json(passenger);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePassenger = async (req, res) => {
  try {
    const passenger = await Passenger.findByIdAndDelete(req.params.id);
    if (!passenger)
      return res.status(404).json({ error: "Passenger not found" });

    fs.unlinkSync(passenger.photo);
    fs.unlinkSync(passenger.idCard);

    res.json({ message: "Passenger deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPassenger,
  getPassengers,
  updatePassenger,
  deletePassenger,
};

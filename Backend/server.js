require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const passengersRoutes = require("./routes/passengers");
const cors = require("cors");
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/passengers", passengersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

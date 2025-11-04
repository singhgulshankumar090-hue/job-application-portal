// Main server file
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Connect database
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/applications", require("./routes/applications"));

// Root route
app.get("/", (req, res) => res.json({ message: "Job Portal API is running " }));

// Start server
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);

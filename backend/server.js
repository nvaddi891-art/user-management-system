require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
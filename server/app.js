// Import required packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({
        application: "ComputeMate AI",
        version: "1.0.0",
        status: "Server Running",
        developer: "Festus Boamah"
    });
});

// Set Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 ComputeMate AI Server is running on http://localhost:${PORT}`);
});
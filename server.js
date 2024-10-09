const express = require("express");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();
require("colors");
const cors = require("cors");
const connectDB = require("./database/dbinit");
connectDB();
const countryRoutes = require("./routes/countryRoute");

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the emergency API!");
});

app.get("/api/pharmacies", async (req, res) => {
  const { lat, lng } = req.query;
  console.log(lng, lat);
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=7000&type=pharmacy&key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// New endpoint for fetching nearby hospitals
app.get("/api/hospitals", async (req, res) => {
  const { lat, lng } = req.query;
  console.log(lng, lat);
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=7000&type=hospital&key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// New endpoint for fetching nearby doctors
app.get("/api/doctors", async (req, res) => {
  const { lat, lng } = req.query;
  console.log(lng, lat);
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=7000&type=doctor&key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.use("/api", countryRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`.bgGreen.black);
});

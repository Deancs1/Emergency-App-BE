//const EmergencyData = require("../schemas/CountrySchema");
const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({}, { strict: false });
const Country = mongoose.model("Country", countrySchema, "countries");

// fetch all countries and their emergency data
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// get country's data by name
const getCountryByName = async (req, res) => {
  try {
    const countryName = req.params.name;
    const country = await Country.findOne({
      "Country.Name": countryName,
    });
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(500).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" }, error);
  }
};

module.exports = {
  getAllCountries,
  getCountryByName,
};

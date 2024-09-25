const express = require("express");
const router = express.Router();
const {
  getAllCountries,
  getCountryByName,
} = require("../controllers/countryControler");

// get all countries
router.get("/countries", getAllCountries);

// get country by name
router.get("/countries/:name", getCountryByName);

module.exports = router;

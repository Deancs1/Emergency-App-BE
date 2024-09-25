/* const mongoose = require("mongoose");
const { Schema } = mongoose;

// country schema
const CountrySchema = new Schema({
  name: { type: String, required: true },
  ISOCode: { type: String, required: true },
  ISONumeric: { type: String, required: true },
});

// emergency schema
const EmergencySchema = new Schema({
  Country: { type: CountrySchema, required: true },
  Ambulance: {
    All: [{ type: String }],
  },
  Fire: {
    All: [{ type: String }],
  },
  Police: {
    All: [{ type: String }],
  },
  Dispatch: {
    All: [{ type: String }],
  },
  Member_112: { type: Boolean, required: true },
  LocalOnly: { type: Boolean, required: true },
  Notes: { type: String },
});

module.exports = mongoose.model("EmergencyData", EmergencySchema);
 */

const mongoose = require("mongoose")

const locationSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please provide a valid name"]
   },
   latitude: {
      type: Number,
      required: [true, "Please provide a valid latitude"]
   },
   longitude: {
      type: Number,
      required: [true, "Please provide a valid longitude"]
   }
})
module.exports = mongoose.model("location", locationSchema)
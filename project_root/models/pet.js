const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    image: {
      type: String,
    },
  },
    { collection: "pets" }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    breed: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    additionalInfo: {
      type: String,
    },
  },
    { collection: "pets" }
);

const Pet = mongoose.model("Pet", petSchema);



module.exports = Pet;

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
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    qualities: {
      type: [String],
      enum: ['Friendly', 'Playful', 'Energetic', 'Calm'],
    }
  },
    { collection: "pets" }
);

const Pet = mongoose.model("Pet", petSchema);



module.exports = Pet;

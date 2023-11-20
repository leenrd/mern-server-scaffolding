const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exampleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    things: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NameOfCollection", exampleSchema);

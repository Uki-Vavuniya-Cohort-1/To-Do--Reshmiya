const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Note", noteSchema);

const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  
  dateOfBirth: {
    type: Date,
    required: true
  },

  banks: {
    type: String,
    required: true,
    trim: true
  },

  location: {
    type: String,
    required: true
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
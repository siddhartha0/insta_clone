import mongoose from "mongoose";
// Define the schema for location and photo data

const LocationPhotoSchema = new mongoose.Schema({
  lat: {
    type: Number,
  },
  long: {
    type: Number,
  },
  location: {
    type: String,
  },
  photo: {
    type: String, // Will store the file path of the uploaded photo
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model
const LocationPhoto = mongoose.model("LocationPhoto", LocationPhotoSchema);

export default LocationPhoto;

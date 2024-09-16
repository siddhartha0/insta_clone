import mongoose from "mongoose";
// Define the schema for location and photo data

const LocationPhotoSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  photo: {
    type: String, // Will store the file path of the uploaded photo
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model
const LocationPhoto = mongoose.model("LocationPhoto", LocationPhotoSchema);

export default LocationPhoto;

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
});

// Create a Mongoose model
const LocationPhoto = mongoose.model("LocationPhoto", LocationPhotoSchema);

export default LocationPhoto;

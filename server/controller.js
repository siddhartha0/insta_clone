import LocationPhoto from "./modal.js";

// Handle photo and location saving
export const uploadData = async (req, res) => {
  try {
    const { lat, long } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Photo upload failed" });
    }

    // Save the location and photo path in MongoDB
    const locationPhoto = new LocationPhoto({
      lat: parseFloat(lat),
      long: parseFloat(long),
      photo: req.file.path, // Save the photo path from multer
    });

    await locationPhoto.save();

    res.status(201).json({
      message: "Location and photo saved successfully!",
      locationPhoto,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

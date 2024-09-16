import LocationPhoto from "./modal.js";

// Handle photo and location saving
export const uploadData = async (req, res) => {
  try {
    console.log(req.body);

    const locationPhoto = new LocationPhoto(req.body);

    await locationPhoto.save();

    console.log("saved");

    res.status(201).json({
      message: "Location and photo saved successfully!",
      locationPhoto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

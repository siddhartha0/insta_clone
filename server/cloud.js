import { v2 as cloudinary } from "cloudinary";

export const CloudStorage = async (req, res, next) => {
  try {
    console.log(req.body);
    const { img } = req.body;
    cloudinary.config({
      cloud_name: "dpm76tdd8",
      api_key: "833646527291612",
      api_secret: "HCx8O6xxxVqToZ8DXd45E7Mp0dQ",
    });

    const uploadResult = await cloudinary.uploader.upload(img, {
      folder: "hostel-pics",
      unique_filename: true,
    });

    res.status(200).json({ imgUrl: uploadResult.url });
  } catch (error) {
    next(error);
  }
};

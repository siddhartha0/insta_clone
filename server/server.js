import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import CloudeRoute from "./route.js";
import LocationRoute from "./location.route.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect(
    "mongodb+srv://siddharthasunuwar:H%40tepops00@cluster0.fjdontg.mongodb.net/Freelancing"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to city-hostel server</h1>`);
});

app.use("/v1", LocationRoute);

app.use("/cloudinary", CloudeRoute);

app.listen(3333, () => {
  console.log("Server has started");
});

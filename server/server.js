import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import CloudeRoute from "./route.js";
import LocationRoute from "./location.route.js";

const app = express();

const allowedOrigins = [
  "https://insta-clone-five-bay.vercel.app",
  "http://localhost:5173",
];

// CORS middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// // CORS using the 'cors' package
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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

import express from "express";
import { uploadData } from "./controller.js";

const router = express();

router.post("/upload", uploadData);

export default router;

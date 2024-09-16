import express from "express";
import { CloudStorage } from "./cloud.js";

const router = express();

router.post("/upload", CloudStorage);

export default router;

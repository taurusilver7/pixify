import express from "express";
import { createReq } from "../controllers/dalle.js";

const router = express.Router();

router.get("/", async (req, res) => {
	res.status(200).json({ message: "Hello, from server DALL-E" });
});

router.route("/").post(createReq);

export default router;

import express from "express";
import { createPost, getPosts } from "../controllers/post.js";

const router = express.Router();

// router.get("/", async (req, res) => {
// 	res.send("Post page.");
// });

router.route("/").post(createPost);
router.route("/").get(getPosts);

export default router;

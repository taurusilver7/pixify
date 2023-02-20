import express from "express";
import postRoute from "./post.js";
import dalleRoute from "./dalle.js";

const router = express.Router();

router.use("/post", postRoute);
router.use("/dalle", dalleRoute);

export default router;

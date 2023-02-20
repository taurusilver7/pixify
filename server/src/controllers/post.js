import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createPost = async (req, res) => {
	try {
		const { name, prompt, photo } = req.body;
		const photoUrl = await cloudinary.uploader.upload(photo);

		const newPost = await Post.create({
			name,
			prompt,
			photo: photoUrl,
		});
		res.status(201).json({ success: true, data: newPost });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Unable to create a post.",
		});
	}
};

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.find({});
		res.status(200).json({ success: true, data: posts });
	} catch (error) {
		res.status(500).json({ success: false, message: "Fetching posts" });
	}
};

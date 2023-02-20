import mongoose from "mongoose";

const connectDB = (url) => {
	mongoose.set("strictQuery", true);

	mongoose
		.connect(url)
		.then(() => console.log("Database connected to server."))
		.catch((err) => {
			console.error(err);
			console.log("failed to connect to database.");
		});
};

export default connectDB;

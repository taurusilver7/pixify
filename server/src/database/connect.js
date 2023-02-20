import mongoose, { connect } from "mongoose";

const connectDB = (url) => {
	mongoose.set("strictQuery", true);

	mongoose
		.connect(url)
		.then(() => console.log("Database connected to server."))
		.catch((err) => console.error(err));
};

export default connectDB;

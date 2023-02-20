import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/database/connect.js";
import indexRoute from "./src/routes/index.js";

connectDB;

dotenv.config();
// console.log(dotenv.config());
// Enables env files to be saved in .env files.

const port = normalizePort(process.env.PORT || "5000");
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

// root route
app.use("/api/v1", indexRoute);
app.get("/", async (req, res) => {
	res.send("Hello, Pixify!");
});

const startServer = async () => {
	try {
		connectDB(process.env.DATABASE_URL);
		app.listen(port, () => console.log(`server started on port:${port}`));
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

startServer();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

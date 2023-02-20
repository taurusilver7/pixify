import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
// Enables env files to be saved in .env files.

const port = normalizePort(process.env.PORT || "5000");
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.get("/", async (req, res) => {
	res.send("Hello, Pixify!");
});

const startServer = async () => {
	app.listen(port, () => console.log(`server started on port:${port}`));
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

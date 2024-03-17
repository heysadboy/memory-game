import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const port = process.env.PORT ?? "8888";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get-data", (req, res) => {
	// Read existing data from JSON file
	fs.readFile(path.resolve(__dirname, "data.json"), "utf8", (err, jsonData) => {
		if (err) {
			res.status(500).json({ success: false, error: "Failed to read data file" });
			return;
		}

		let parsedData;

		try {
			parsedData = JSON.parse(jsonData);
		} catch (parseError) {
			res.status(500).json({ success: false, error: "Failed to parse JSON data" });
			return;
		}
		res.json(parsedData);
	});
});

app.post("/store-data", (req, res) => {
	const data = req.body;

	// Read existing data from JSON file
	fs.readFile(path.resolve(__dirname, "data.json"), "utf8", (err, jsonData) => {
		if (err) {
			res.status(500).json({ success: false, error: "Failed to read data file" });
			return;
		}

		let parsedData;

		try {
			parsedData = JSON.parse(jsonData);
		} catch (parseError) {
			res.status(500).json({ success: false, error: "Failed to parse JSON data" });
			return;
		}

		// Append new data to existing data array
		parsedData.push(data);

		// Write updated data back to JSON file
		fs.writeFile(path.resolve(__dirname, "data.json"), JSON.stringify(parsedData), (err) => {
			if (err) {
				res.status(500).json({ success: false, error: "Failed to store data" });
			} else {
				res.json({ success: true });
			}
		});
	});
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

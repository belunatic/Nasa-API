const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	const result = await axios.get(
		`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
	);
	res.json(result.data);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

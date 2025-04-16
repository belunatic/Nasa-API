const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	res.send(`this is the api ${process.env.NASA_API_KEY}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

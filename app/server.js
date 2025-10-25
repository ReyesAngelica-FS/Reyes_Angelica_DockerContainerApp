const express = require("express");
const app = express();
app.get("/", (_req, res) => res.send("Hello from Angelica's Docker Container App!"));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
const PORT = 3000;

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// if you really want `/api` root to respond
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API root" });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});



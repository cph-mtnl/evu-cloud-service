const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/http", (req, res) => {
  res.send("Hello World!");
});

app.post("/http", (req, res) => {
  res.send("You made a POST Request, did you want to save something?");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

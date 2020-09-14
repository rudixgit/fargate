const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World1!");
});

app.listen(80, () => {
  console.log(`Example app listening at http://localhost`);
});

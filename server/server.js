const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3005, () => console.log("listening to port 3005"));

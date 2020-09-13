const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`listening to port ${port}`));

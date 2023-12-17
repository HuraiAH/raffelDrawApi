const express = require("express");
const morgan = require("morgan");
const router = require("./router");
// create app
const app = express();
// middleware
app.use(morgan("dev"));
app.use(express.json());
//

app.use(router);

app.get("*", (req, res) => {
  res.send("404 not found!");
});

// app listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  console.log(`localhost:${port}`);
});

const express = require("express");
const rateLimit = require("express-rate-limit");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const connect = require("./config/database");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(limiter);

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  await connect();
  console.log(`server running on port ${PORT}`);
});

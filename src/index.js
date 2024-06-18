const express = require("express");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const app = express();

app.listen(PORT, async () => {
  await connect();
  console.log(`server running on port ${PORT}`);
});

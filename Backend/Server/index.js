const express = require("express");
const path = require("path");

require('dotenv').config();

const app = express();
const port = 3000;

const discord_bot_token = process.env.DISCORD_BOT_TOKEN;

app.use(express.static(path.join(__dirname, "/../../Public/dist")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require("dotenv").config();

const { Client } = require("discord.js"); /* can communicate with Discord */

const Discord_Bot = new Client(); /* instance of the Bot */

module.exports.Discord_Bot = Discord_Bot;

const express = require("express");
const path = require("path");

const { Router } = require("./Routes/main.");

const app = express();
const port = 3000;


app.use("/bot", Router);

app.use(express.static(path.join(__dirname, "/../../Public/dist")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

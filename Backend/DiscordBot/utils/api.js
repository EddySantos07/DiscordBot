require("dotenv").config();

const { Discord_Bot } = require("../../Server/index");

const fetch = require("node-fetch");

async function Get_Bot_Guilds(req, res) {

    const TOKEN = process.env.DISCORD_BOT_TOKEN

  const response = await fetch("http://discord.com/api/v6/users/@me/guilds", {
    method: "GET",
    headers: {
      Authorization: `Bot ${TOKEN}`,
    },
  });
  console.log("guilds?");
  res.send(response.json());
}

module.exports.Get_Bot_Guilds = Get_Bot_Guilds;

// const { Guild } = require("discord.js");
const { Discord_Bot } = require("../../Server/index");

const Get_All_Guild_Members = async (req, res) => {
  const Guilds = Discord_Bot.guilds.cache;

  console.log(Guilds);

  res.send(Guilds);
};

module.exports.Get_All_Guild_Members = Get_All_Guild_Members;

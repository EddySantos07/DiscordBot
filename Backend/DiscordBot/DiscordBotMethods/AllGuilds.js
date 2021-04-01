// const { Guild } = require("discord.js");
const { Discord_Bot } = require("../../Server/index");

const Get_All_Guilds = async (req, res) => {
  const Guilds = Discord_Bot.guilds.cache.map((guild) => {
    const guild_id = guild.id;
    const { icon } = guild;

    // console.log(guild)
    return { guild_id, icon };
  });

  //   console.log(Guilds);

  let servers = Guilds.map(async (guild) => {
    const server = await Discord_Bot.guilds
      .fetch(guild.guild_id)
      .then((guild) => {
        // console.log(guild.iconURL(), 'this is a guild');

        return guild;
      });
    return server;
  });

  Promise.all(servers).then((data) => {
    res.send(data);
  });
};

module.exports.Get_All_Guilds = Get_All_Guilds;

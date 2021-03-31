const { Discord_Bot } = require("../Server/index.js");

Discord_Bot.on("ready", () => {
  console.log(
    ` Discord Bot - Name - ${Discord_Bot.user.username} has logged in! `
  );
});

Discord_Bot.login(
  process.env.DISCORD_BOT_TOKEN
); /* create connection to the Discord API */

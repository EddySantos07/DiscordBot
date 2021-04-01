const { Discord_Bot } = require("../Server/index");

const { YoutubeSrch } = require("./YoutubeSrch/YoutubeSrch");

const { Kick } = require("./DiscordBotMethods/KickPerson");

const prefixs = {
  "!": "!",
};

const ytsrPrefix = "!";

const kickPrefix = "#";

Discord_Bot.login(
  process.env.DISCORD_BOT_TOKEN
); /* create connection to the Discord API */

Discord_Bot.on("ready", () => {
  console.log(
    ` Discord Bot - Name - ${Discord_Bot.user.username} has logged in! `
  );
});

Discord_Bot.on("message", (message) => {
  // console.log(`Author - ${message.author.tag}: ${message.content}`);

  if (message.author.bot) return;

  if (message.content.startsWith(ytsrPrefix)) {
    YoutubeSrch(Discord_Bot, message, message.content, ytsrPrefix);
    return;
  }

  if ( message.content.startsWith(kickPrefix) )  {
    Kick( Discord_Bot, message, message.content, kickPrefix );
    return
  }

  if (message.content === "hello") {
    message.reply("hello there!");
  }
});

/* Documentation on what method means what */
const types_of_methods_and_their_use = {
  "message.content":
    "this method is the actual string when sending a message in Discord",
  "message.reply":
    "this method is used when you want the Discord bot to send a message back!",

  "message.guild.members": {
    "has methods":
      "this is a guild memeber manager which has more options to it",
    cache: "this is a collection and has additional utility methods",
  },

  ".prune": {
    "has methods": "such as -",
    "options.days": "number of days of inactivity required to kick out someone",
  },
};

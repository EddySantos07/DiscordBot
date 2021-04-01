const Kick = (client, message, messageContent, prefix) => {

  const [CMD_NAME, ...args] = messageContent
    .trim()
    .substring(prefix.length)
    .split(/\s+/); // match all white spaces with this regex

    console.log(CMD_NAME, 'command', args,'args')

  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply(" You do not have permissions to do this command!");
  }

  if (CMD_NAME === "kick") {
    if (args.length === 0) {
      return message.reply("Please provide an id!");
    }

    const member = message.guild.members.cache.get(args[0]);

    if (member) {
      member
        .kick()
        .then((memeber) => {
          message.channel.send(`${memeber} was kicked.`);
        })
        .catch((err) => {
          message.channel.send(`I cannot kick ${memeber}! `);
        });
    } else {
      message.channel.send("That user/member was not found!");
    }
  }
};

module.exports.Kick = Kick;

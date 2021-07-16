const Kick = (client, message, messageContent, prefix) => {

  const [CMD_NAME, ...args] = messageContent
    .trim()
    .substring(prefix.length)
    .split(/\s+/); // match all white spaces with this regex

    // console.log(CMD_NAME, 'command', args,'args')

  if (CMD_NAME !== "kick") {
    return message.channel.send(
      "make sure you have the right command! are you looking for this? - !kick <usrID>"
    );
  }

  if (CMD_NAME === "kick") {
    if (args.length === 0) {
      return message.reply("Please provide an id!");
    }

    const member = message.guild.members.cache.get(args[0]);

    // console.log(args)
    // console.log(member)

    if (member) {
      member
        .kick()
        .then((member) => {
          message.channel.send(`${member} was kicked.`);
        })
        .catch((err) => {
          message.channel.send(`I cannot kick ${member}! `);
        });
    } else {
      message.channel.send("That user/member was not found!");
    }
  }
};

module.exports.Kick = Kick;

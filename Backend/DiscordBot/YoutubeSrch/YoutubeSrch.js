const YouTube = require("youtube-sr").default;
const { MessageEmbed } = require("discord.js");

YouTube.set("api", false);

const YoutubeSrch = async (client, message, messageContent, prefix) => {
  const [CMD_NAME, ...args] = messageContent
    .trim()
    .substring(prefix.length)
    .split(/\s+/); // match all white spaces with this regex

  // console.log(CMD_NAME, "command", args, "args");

  if (CMD_NAME !== "youtube") {
    return message.channel.send(
      "make sure you have the right command! are you looking for this? - !youtube <yoursearch>"
    );
  }

  if (args.length === 0) {
    return message.channel.send(
      "Please provide A search, after your yt command:)"
    );
  }

  console.log(args, "args?");

  YouTube.search(args.join(" "), { limit: 2 })
    .then((video) => {
      // console.log(video);

      const firstVideo = video[0];

      const embed = new MessageEmbed()
        .setTitle(firstVideo.title)
        .setURL(firstVideo.channel.url)
        .setDescription(firstVideo.durationFormatted)
        .setImage(firstVideo.thumbnail.url);

        // .setDescription(firstVideo.uploadedAt)
        // .setDescription(firstVideo.views)

      return message.channel.send(embed);
    })
    .catch(console.error);

  //   if (!query) {
  //     return message.channel.send("Please Provide A search! :)");
  //   }

  //   const res = await ytsr(query).catch((err) => {
  //     return message.channel.send(" No Results Were Found! ");
  //   });

  //   const video = res.items.filter((i) => {
  //     return i.type === "video";
  //   })[0];

  //   if (!video) {
  //     return message.channel.send(" No Results Were Found! ");
  //   }

  //   const embed = new Messageembed()
  //     .setTitle(video.title)
  //     .setImage(video.thumbnail);
  //   //   .

  //   return message.channel.send(embed);
};

module.exports.YoutubeSrch = YoutubeSrch;

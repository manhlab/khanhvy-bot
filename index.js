require("dotenv").config();
const { Client, Intents } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

let interval;
client.on("guildMemberAdd", (member) => {
  member.guild.channels.get("channelID").send("Welcome to our channel");
});
client.on("message", async (msg) => {
  var welcome_dict = {
    hi: "Привет :))",
    hello: "你好 :>",
    chào: "你好 :))",
  };
  if (msg.channel.name === "welcome") {
    Object.entries(welcome_dict).forEach(([key, value]) => {
      if (msg.content.toLowerCase().includes(key)) {
        msg.reply(value);
      }
    });
  } else if (msg.content.toLowerCase().includes("hỏi")) {
    msg.reply("Bạn vui lòng chờ phản hồi từ admin nhé!");
  } else {
    msg.reply(msg.content);
  }
  if (msg.content.toLowerCase().includes("vy")) {
    msg.reply("Mình khong có ngu ngok đâu nha :))");
  }
  
});

//must be last line
client.login(process.env.BOT_TOKEN);

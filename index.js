require("dotenv").config();
const { Client, Intents } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

let interval;
client.on("guildMemberAdd", (member) => {
  member.guild.channels.get("welcome").send("Mình là Khánh Vy, đang học dự bị tại Bách Khoa. Mình phụ trách quản lý page. Rất vui được làm quen với bạn!");
});
client.on("message", async (msg) => {
  var welcome_dict = {
    hi: "hiii :>",
    hello: "Chaoooo ban :>",
    chào: "Hellllo nha :))",
  };
  if (msg.channel.name === "welcome") {
    Object.entries(welcome_dict).forEach(([key, value]) => {
      if (msg.content.toLowerCase().includes(key)) {
        msg.reply(value);
      }
    });
  } else if (msg.content.toLowerCase().includes("hỏi")) {
    msg.reply("Bạn vui lòng chờ phản hồi từ admin nhé!");
  } 
  if (msg.content.toLowerCase().includes("vy")) {
    msg.reply("Mình khong có ngu ngok đâu nha :))");
  }
  
});
client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
});
//must be last line
client.login(process.env.BOT_TOKEN);

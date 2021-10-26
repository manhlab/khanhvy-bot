require("dotenv").config();
const { Client, Intents } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

let interval;
client.on("message", async (msg) => {
  var welcome_dict = {
    "hi": "Chào mừng mừng anh đến với câu lạc bộ nhé.",
    "hello": "Chào anh nhé :>",
    "chào": "Hello anh :))",
  };
  if (msg.channel.name == "welcome") {
    for (var i = 0; i < welcome_dict.length; i++) {
      if (msg.content.lower().includes(welcome_dict.key(i))) {
        msg.reply(welcome_dict.value(i));
        break;
      }
    }
  } else if (msg.content.lower().includes("hỏi")) {
    msg.reply(
      "Câu hỏi của bạn đã được ghi nhận trên hệ thống! Bạn vui lòng chờ phản hồi từ admin nhé!"
    );
  } else {
  }
});

//must be last line
client.login(process.env.BOT_TOKEN);

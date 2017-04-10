'use strict';
var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("379443264:AAHHhmziOVsYWMB0tnEelxUF6jSLv-39U2U", { polling: true });

telegram.on("text", (message) => {
    telegram.sendMessage(message.chat.id, "Hi " + message.chat.first_name);
});
const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

var randomMessage = [
    "Lol",
    "T drole ptdr",
    "XeCrafT c le best lol"
];

bot.on("message", function(message) {
   if(message.content === "ping") {
       message.channel.sendMessage(randomMessage[Math.floor(Math.random() * randomMessage.length)]);
   }  
});


bot.login("Mzc4OTE0OTg3OTk0Nzc1NTYy.DOibng.yzNvWznRQbUbcoN_qSIWzbeK3qs");

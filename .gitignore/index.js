const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", function(message) {
   if(message.content === "ping") {
       message.reply("Pong!");
   } 
   if(message.content === "Bonjour") {
    message.reply("Coucou!");
} 
});


bot.login("Mzc4OTE0OTg3OTk0Nzc1NTYy.DOibng.yzNvWznRQbUbcoN_qSIWzbeK3qs");

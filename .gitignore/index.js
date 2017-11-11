const Discord = require("discord.js");

var bot = new Discord.Client();

var PREFIX = "!";

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

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;
    if(!message.content.substring(PREFIX.length).split(" "));

    var args = message.content.split(" ").slice(1);

    switch (args[0].toLowerCase()) {
        case "help":
        var embed = new Discord.RichEmbed()
        .addField("!help", "Cette commande permet de savoir toute les commandes du bot.")
        .setColor("#FE2E2E")
        .setFooter(message.author.username, " Merci d'utiliser le bot ! :D")
        .setAuthor(message.author.avatarURL)
        message.delete()
        message.channel.sendEmbed(embed);
        break;

        default:
        message.reply("Cette commande n'existe pas!")
    }
});


bot.login("Mzc4OTE0OTg3OTk0Nzc1NTYy.DOibng.yzNvWznRQbUbcoN_qSIWzbeK3qs");

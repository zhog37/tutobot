const Discord = require("discord.js");

var bot = new Discord.Client();

const PREFIX = "!";

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.on('message', function(message) {
    
    if(message.content === 'ping') {
     message.reply('Pong ! ' + bot.ping + ' ms !')  
    }
    
});

bot.on('message', async function(message) {
    if(message.author.equals(bot.user)) return;
    
    if(!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split (" ");
    
    switch (args[0].toLowerCase()) {
            
        case "ping":
           message.reply('Pong ! ' + bot.ping + ' ms !');
            break;
            
            
        default:
            message.reply("Commande invalide, faites !help :D");
    }
});
    

bot.login(process.env.TOKEN);

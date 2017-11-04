const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setGame('on ${bot.guilds.size} server(s)');
   client.user.setGame('http://dumbkids.xyz');
   

});


client.login(process.env.APP_TOKEN);

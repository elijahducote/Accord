const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setGame('o n ${bot.guilds.size} s e r v e r(s)', 'd u m b k i d s.x y z');

});


client.login(process.env.APP_TOKEN);

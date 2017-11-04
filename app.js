const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setGame(`on ${client.guilds.size} server(s)`, `with ${client.users.size} users`);

});


client.login(process.env.APP_TOKEN);

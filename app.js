const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setGame(game: 'on 1 server(s)', 'https://www.dumbkids.xyz/')

});


client.login(process.env.APP_TOKEN);

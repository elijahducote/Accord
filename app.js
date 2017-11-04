const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setGame('<on> 3 server(s)', 'https://dumbkids.xyz')

});


client.login(process.env.APP_TOKEN);

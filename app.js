const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

   console.log('${client.user.username} is ready');
   client.user.setPresence({ game: { name: 'on 1 server (s)', type: 0 } });
   client.user.setGame('on 1 server (s)', 'https://dumbkids.xyz')

});


client.login(process.env.APP_TOKEN);

'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', function(message) {
  const roleId = 728383143081541742n;
  const generalId = '727942202747256844';
  const coloId = '727956762489258157';
  const memberId = 727956398713077789n;
  const ogId = 727956256794607637n;
  
  const generalChannel = client.channels.cache.get(generalId);
  const coloChannel = client.channels.cache.get(coloId);
  
  const upHours = [0, 2, 11, 18, 20, 22];

  if (message.content === '$loop') {
    var interval = setInterval(function() {
      const date = new Date();
      const hour = date.getUTCHours();
      const minute = date.getUTCMinutes();

      if (upHours.includes(hour) && minute === 30) {
        generalChannel.send(`<@&${roleId}> Swords up!`).catch(console.error);
      }

      if (hour === 18 && minute === 55) {
        coloChannel.send(`<@&${memberId}><@&${ogId}> Colosseum stars in 5 minutes`).catch(console.error);
      }

      if (hour === 19 && minute === 0) {
        coloChannel.send(`<@&${memberId}><@&${ogId}> Colosseum started`).catch(console.error);
      }
    }, 60000);
  }
});

client.login(process.env.BOT_TOKEN);

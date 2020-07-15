'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

const roleId = 732786744336056351n;
const generalId = '727942202747256844';
const coloId = '727956762489258157';
const memberId = 727956398713077789n;
const ogId = 727956256794607637n;

client.on('ready', () => {
    console.log('I am ready!');
});
  
client.on('message', function(message) {
    const generalChannel = client.channels.cache.get(generalId);
    const coloChannel = client.channels.cache.get(coloId);
    
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
            const date = new Date();
            const hour = date.getUTCHours();
            const minute = date.getUTCMinutes();

            if (
            (hour === 22 && minute === 30) ||
            (hour === 0 && minute === 30) ||
            (hour === 2 && minute === 30) ||
            (hour === 11 && minute === 30) ||
            (hour === 18 && minute === 30) ||
            (hour === 20 && minute === 30)
            ) {
                generalChannel.send(`<@&${roleId}> Swords up!`).catch(console.error);
            }

            if (hour === 18 && minute === 55) {
                colo.send(`<@&${memberId}><@&${ogId}> Colosseum stars in 5 minutes`).catch(console.error);
            }
            
            if (hour === 19 && minute === 0) {
                colo.send(`<@&${memberId}><@&${ogId}> Colosseum started`).catch(console.error);
            }
        }, 60000); 
    }
});

client.login(process.env.BOT_TOKEN);

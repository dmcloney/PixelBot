const Discord = require('discord.js');
const fivem = require("discord-fivem-api");
var pcrpinfo = require('./pcrpinfo.json');
const server = new fivem.DiscordFivemApi(pcrpinfo.server_Iip);
module.exports = {
    name: 'pcrp',
    description: "For the FiveM server",

    async execute(msg, args) {
        let serverStatus = server.getServerStatus();
        let maxPlayers = server.getMaxPlayers();
        try {
            let playersOnlineResult = await server.getPlayers()
            let playersOnline= [];
            for (let player of playersOnlineResult ) {
              playersOnline.push(`${player.name} `);
            }
            console.log(playersOnline);
          } catch (error) {
            console.log(error);
          };


         const embed = () => {
             if (serverStatus === 'offline') {
                 return new Discord.MessageEmbed()
                     .setColor('RED')
                     .setAuthor('ProjectCityRP Server Status', 'https://cdn.discordapp.com/icons/853098864004169750/987536a54445cdd39f594fab3b2e3e04.png?size=128')
                     .addField({
                         name: 'How do you join?',
                         value: 'You can join the server by entering ***connect cfx.re/join/6v6gbj*** in the "F8" Menu of FiveM. At the bottom is the server status to see how many people are online and queuing. (This system was created by *PixelGalaxy*)'
                     },
                     )
                     .addField({ name: 'Server Status', value: `❌${serverStatus}` })
                     .setTimestamp()
                     .setFooter('ProjectCityRP'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
             } else {
                 return new Discord.MessageEmbed()
                     .setColor('BLUE')
                     .setAuthor('ProjectCityRP Server Status', 'https://cdn.discordapp.com/icons/853098864004169750/987536a54445cdd39f594fab3b2e3e04.png?size=128')
                     .addFields({
                         name: 'How do you join?',
                         value: 'You can join the server by entering ***connect cfx.re/join/6v6gbj*** in the "F8" Menu of FiveM. At the bottom is the server status to see how many people are online and queuing. (This system was created by *PixelGalaxy*)'
                     },
                         { name: 'Server Status', value: `✅${serverStatus}`, inline: true },
                         { name: 'Queue', value: `0`, inline: true },
                         { name: 'Online Players', value: `${playersOnline.length}/${maxPlayers}`, inline: true },
                         { name: 'Player List', value: playersOnline.length > 0 ? playersOnline : 'No Players Online!' },
                     )

                     .setTimestamp()
                     .setFooter('ProjectCityRP'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
             }
         };
         msg.channel.send(embed);
    }
}
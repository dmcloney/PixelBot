const Discord = require('discord.js');
const fivem = require("discord-fivem-api");
var pcrpinfo = require('../pcrpinfo.json');
const server = new fivem.DiscordFivemApi(pcrpinfo.server_ip);
module.exports = {
    name: 'pcrp',
    description: "For the FiveM server",

    async execute(msg, args) {
        try {
            let serverStatus = await server.getServerStatus();
            function capitalize(serverStatus) {
                const lower = serverStatus.toLowerCase()
                return serverStatus.charAt(0).toUpperCase() + lower.slice(1)
            }
            let maxPlayers = await server.getMaxPlayers();
            let playersOnlineResult = await server.getPlayers()
            let playersOnline = [];
            for (let player of playersOnlineResult) {
                playersOnline.push(`${player.name} `);
            }
            /*const chunkSize = playersOnline.length / 3;
            const groups = playersOnline.map((e, i) => {
                return i % chunkSize === 0 ? playersOnline.slice(i, i + chunkSize) : null;
            }).filter(e => { return e; });
            console.log({groups})*/ // THIS IS THE GROUPING FEATURE FOR ARRAYS, THIS IS NEEDED TO BE TESTED
            //if (playersOnline.length > 3, );
            console.log(`Players Online: ` + playersOnline);
            console.log(`Total Number: ` + playersOnline.length)

            const embed = () => {
                if (serverStatus === 'offline') {
                    return new Discord.MessageEmbed()
                        .setColor('RED')
                        .setAuthor('ProjectCityRP Server Status', 'https://cdn.discordapp.com/icons/853098864004169750/987536a54445cdd39f594fab3b2e3e04.png?size=128')
                        .addField({
                            name: 'How do you join?',
                            value: 'You can join the server by entering ***connect IP*** in the "F8" Menu of FiveM. At the bottom is the server status to see how many people are online and queuing. (This system was created by *PixelGalaxy*)'
                        },
                        )
                        .addField({ name: 'Server Status', value: `❌ ${capitalize(serverStatus)}` })
                        .setTimestamp()
                        .setFooter('ProjectCityRP'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
                } else {
                    return new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor('ProjectCityRP Server Status', 'https://cdn.discordapp.com/icons/853098864004169750/987536a54445cdd39f594fab3b2e3e04.png?size=128')
                        .addFields({
                            name: 'How do you join?',
                            value: 'You can join the server by entering ***connect IP*** in the "F8" Menu of FiveM. At the bottom is the server status to see how many people are online and queuing. (This system was created by *PixelGalaxy*)'
                        },
                            { name: 'Server Status', value: `✅ ${capitalize(serverStatus)}`, inline: true },
                            { name: 'Queue', value: `0`, inline: true },
                            { name: 'Online Players', value: `${playersOnline.length}/${maxPlayers}`, inline: true },
                            { name: 'Player List:', value: playersOnline.length > 0 ? playersOnline : 'No Players Online!', inline: true },
                            //{ name: '\u200B', value: playersOnlineTwo.length > 0 ? playersOnlineTwo : '\u200B', inline: true },
                            //{ name: '\u200B', value: playersOnline.length > 2 ? playersOnlineThree : '\u200B', inline: true },
                        )

                        .setTimestamp()
                        .setFooter('ProjectCityRP'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
                }
            };
            msg.channel.send(embed());
        } catch (error) {
            console.log(error);
        };
    }
}
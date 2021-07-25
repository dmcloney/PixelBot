const Discord = require('discord.js');
const fivem = require("discord-fivem-api");
const server = new fivem.DiscordFivemApi("51.81.166.101:30120");
module.exports = {
    name: 'projectcityrp',
    description: "For the FiveM server",

    async execute(msg, args) {
        server.getPlayersOnline().then((res) => {
            msg.channel.send(`${res}`).catch(console.error);
            console.log("Connected to the Project City RP Server, Players Online: " + res)
        });
    }
}
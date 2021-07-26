const Discord = require('discord.js');
const fivem = require("discord-fivem-api");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const prefix = '!';

// CF - This section is to allow seperate command files
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	console.log('Loaded File: ' + file);
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
//End of Section

var auth = require('./auth.json');

//Setting Bot information
client.login(auth.token);
client.on('ready', () => {
	console.log(`--------------------------------`);
	console.log(`Logged in as ${client.user.tag}!`);
	console.log(`Client ID is ${client.user.id}`);
	console.log(`--------------------------------`);
	console.log('Bot Launched...');
	client.user.setActivity("on Pixel's Computer", { type: 'STREAMING', url: 'https://twitch.tv/pixelgalaxxyy' }); //Telling the bot to say it is streaming
	// API Section, not used right now
	//client.api.applications(client.user.id).commands.post({data: {
	//	name: 'ping',
	//	description: 'ping pong!'
	//}});
	//
});


client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const commandBody = msg.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	client.commands.get(`${command}`).execute(msg, args);
});
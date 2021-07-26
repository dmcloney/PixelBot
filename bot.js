const Discord = require('discord.js');
const fivem = require("discord-fivem-api");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const prefix = '!';

// CF - This section is to allow seperate command files
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	console.log(file);
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
//End of Section

var auth = require('./auth.json');
//var seconds = 5;
//const app = prefix();
//app.use(helmet());
//app.use(morgan('dev'));

//Setting Bot information
client.login(auth.token);
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log(`Client ID is ${client.user.id}`);
	console.log('Bot Launched...');
	client.user.setActivity("on Pixel's Computer", { type: 'STREAMING', url: 'https://twitch.tv/pixelgalaxxyy' }); //Telling the bot to say it is streaming
//
	client.api.applications(client.user.id).commands.post({data: {
		name: 'ping',
		description: 'ping pong!'
	}});
//
});


client.on( 'message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const commandBody = msg.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	//const botchannel = '697975823415902278';
	/*if ( command === 'pingg' ) {
		client.commands.get('ping').execute(msg, args);
	};
	if (msg.content === prefix + 'delete') {
			msg.reply('Closing channel in 5 seconds!').then((msg) => {
				for (let i = 5; i >=0; i--) {
					setTimeout(() => {
						msg.edit(`Closing channel in ${i} seconds!`);
					}, 5000)
				}
			});
		};
	//This is the radd command
	if (command === 'radd') {
		client.commands.get('radd').execute(msg, args);
	};*/

	//client.commands.get(`${command}`).execute(msg, args); <- MASS COMMANDS
	
	// if (command === 'awesome') {
	// 	client.commands.get('awesome').execute(msg, args);
	// };
	// if (command === 'roles') {
	// 	client.commands.get('roles').execute(msg, args);
	// };
	// if (command === 'startmsg') {
	// 	client.commands.get('startmsg').execute(msg, args);
	// };
	 if (command === 'reactions') {
	 	client.commands.get('reactions').execute(msg, args, Discord, client);
	 } else {client.commands.get(`${command}`).execute(msg, args);};
	// if (command === 'projectcityrp') {
	// 	client.commands.get('projectcityrp').execute(msg, args);
	// };
});
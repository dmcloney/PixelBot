const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] });
module.exports = {
	name: 'pcrpinfo',
	description: "Puts a message in PCRPInfo Chat on Farva's Server",

	async execute(msg, args) {
		try {
			if (!msg.member.roles.cache.has(`802430590733123584` || `861118098560122891` || `864629497449283625`)) {
				console.log("FAILED");
				return msg.reply("You do not have the permissions to use this command!");
			} else {
				if (!args.length) {
					console.log("NO ARGS PROVIDED");
					return msg.channel.send(`Please provide an argument:\n-info\n-commands\nhelp`);
				} else if (args[0] === 'info') {
					console.log("SENDING MESSAGE FOR INFO");
					msg.delete(1000);
					let embed = new Discord.MessageEmbed()
						.setColor('YELLOW')
						.setAuthor('ProjectCityRP Server IP')
						.setDescription('**IP address for direct connect to the PCRP servers**')
						.addFields(
							{ name: 'Public Server:', value: '**connect cfx.re/join/6v6gbj**' },
							{ name: 'Direct Link:', value: 'fivem://connect/cfx.re/join/6v6gbj' },
							{ name: '\u200B', value: 'F8 console command example connect cfx.re/join/6v6gbj, without quotes. Or you can simply copy & paste Direct Link to your Browser and it should connect you to the live server.' },
						)
						.setFooter('Creator @TheUnknown'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
					msg.channel.send(embed);
					return;
				} else if (args[0] === 'commands') {
					console.log("SENDING MESSAGE FOR COMMANDS");
					msg.delete(1000);
					await msg.channel.send({ files: ["https://cdn.discordapp.com/attachments/853875707611185192/862787394629926912/commands.png"] }).catch(console.error);
					msg.channel.send(`Here is a list of commands available in this Discord. These commands are for the Project City RP FiveM server. All commands are to be issued in the ${msg.guild.channels.cache.get('802584949416132659').toString()} channel.\n\n!banappeal - Appeal your ban.\n!cache - How to clear your FiveM cache.\n!crash - How to properly post a crash screenshot.\n!dn - Discord name change requirements.\n!govtapps - Link to LEO and EMS applications.\n!ip - IP address for direct connect to the PCRP servers.\n!leoreport - Link to the in character LEO report form.\n!playerreport - Report a player for breaking a rule.\n!rules - Link to PCRP out of character rules.`).catch(console.error);
					return;
				} else if (args[0] === 'help') {
					console.log("SENDING MESSAGE FOR HELP");
					msg.channel.send(`Bruh, if you don't know these, then you need help!`).catch(console.error);
					return;
				} else {
					console.log("SOMETHING WENT WRONG");
					msg.reply(`you entered a command that doesn't exist, please use !pcrpinfo to get a list of commands that are available right now.`).then(msg => {
						setTimeout(() => msg.delete(), 10000)
					}).catch(console.error);
					return;
				}
			}
		} catch (error) {
			console.log(error);
		};
	}
}
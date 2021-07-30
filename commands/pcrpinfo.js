module.exports = {
	name: 'pcrpinfo',
	description: "Puts a message in PCRPInfo Chat on Farva's Server",

	execute(msg, args) {
		if (!msg.author.hasPermission("ADMINISTRATOR")) return msg.reply("You do not have the permissions to use this command!"); {
		if (!args.length) {
			return msg.channel.send(`Please provide an argument:\n-info\n-commands\nhelp`);
		} else if (args[0] === 'info') {
			return new Discord.MessageEmbed()
                        .setColor('YELLOW')
                        .setAuthor('ProjectCityRP Server IP')
						.setDescription('IP address for direct connect to the PCRP servers')
                        .addFields(
							{ name: 'Public Server:', value: '*connect cfx.re/join/6v6gbj*' },
							{ name: 'Direct Link:', value: 'fivem://connect/cfx.re/join/6v6gbj' },
							{ name: '\u200B', value: 'F8 console command example connect cfx.re/join/6v6gbj, without quotes. Or you can simply copy & paste Direct Link to your Browser and it should connect you to the live server.' },
                        )
                        .setFooter('Creator @TheUnknown'); //.setFooter('ProjectCityRP', 'avatarImgUrl')
		} else if (args[0] === 'commands') {
			msg.channel.send({files: ["https://cdn.discordapp.com/attachments/853875707611185192/862787394629926912/commands.png"]}).catch(console.error);
			msg.channel.send(`Here is a list of commands available in this Discord. These commands are for the Project City RP FiveM server. All commands are to be issued in the #bots-n-lvl-up🥇🥈🥉 channel.\n\n!!banappeal - Appeal your ban.\n!cache - How to clear your FiveM cache.\n!crash - How to properly post a crash screenshot.\n!dn - Discord name change requirements.\n!govtapps - Link to LEO and EMS applications.\n!ip - IP address for direct connect to the PCRP servers.\n!leoreport - Link to the in character LEO report form.\n!playerreport - Report a player for breaking a rule.\n!rules - Link to PCRP out of character rules.`).catch(console.error);
			return;
		} else if (args[0] === 'help') {
			msg.channel.send(`Bruh, if you don't know these, then you need help!`).catch(console.error);
			return;
		}
	}
	}
}
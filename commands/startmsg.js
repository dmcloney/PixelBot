const Discord = require('discord.js');
module.exports = {
	name: 'startmsg',
	description: "Puts the starting messages in chat.",

	execute(msg, args) {
		let embed = new Discord.MessageEmbed()
		.setColor('#006aff')
		.setTitle('---Welcome to the Snips and Clips Discord Server!!!---')
        .setDescription('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
		.addFields(
			{ name: '📝 Everyone wants to enjoy their experience here so please make sure to follow these simple rules! 📝', value: '➤ IMPORTANT: TRY TO KEEP THINGS IN THEIR RESPECTIVE CHANNELS, IT IS TO KEEP THE SERVER NEAT!' },
			{ name: '\u200B', value: '➤ This is an English server with mostly English-speaking followers, please keep it English, no other languages!' },
			{ name: '\u200B', value: '➤ If you need any help at all feel free to message a staff member!' },
			{ name: '\u200B', value: '➤ No bashing, bullying, impersonation, etc. We\'re all humans with feelings, unfortunately.' },
			{ name: '\u200B', value: '➤ No advertising, including server links, and no messaging random users with invites or advertisements. If reported with proof you will be banned, and if you send unsolicited messages you will be reported to Discord! Self-promotion is allowed, but only in the #self-promotion channel, and short clips from shots are allowed in the #clips-and-highlights channel. Advertising also includes selling accounts and cheats, both of which are against Activision ToS.' },
			{ name: '\u200B', value: '➤ No political discussions as this can and probably will end up in unnecessary drama.' },
			{ name: '\u200B', value: '➤ No releasing personal information in this server, for your protection and ours. It will be removed.' },
			{ name: '\u200B', value: '➤ Remain peaceful and act like a semi-normal human being please, it\'s up to the staff\'s decision to kick/ban you if you keep being annoying or disrespectful.' },
			{ name: '\u200B', value: '➤ Respect ALL staff members, pretty sure they all have the power to ban you... As long as you behave they won\'t hurt you tho, at least I think... If you feel there is an abuse of power (banning or muting doesn\'t count) you can report it to another staff member. Also, no impersonating staff members.' },
			{ name: '\u200B', value: '➤ No "hardcore" or Discord ToS breaking stuff is allowed in there, luckily Discord doesn\'t allow anything with too much gore!' },
			{ name: '\u200B', value: '➤ Feel free to mute some of the channels as things can get hectic!!!' },
			{ name: '\u200B', value: '➤ If you are confused about the purpose of a channel, check the channel description.' },
		)
		//.setImage('https://i.stack.imgur.com/Fzh0w.png')
		.setFooter("\u2800".repeat(100)+"|")
		.setImage('https://cdn.discordapp.com/attachments/811836319289311242/811849947863187516/RoyZoids_Banner.jpg');
		msg.channel.send(embed).catch(console.error);
	}
}
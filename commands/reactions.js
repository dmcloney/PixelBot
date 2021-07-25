const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
module.exports = {
	name: 'reactions',
	description: "Responds with you are awesome!",

	async execute(msg, args) {
		const channel = '803037517939081227';
		const consoleRole = msg.guild.roles.cache.find(role => role.name === "Console");
		const PCRole = msg.guild.roles.cache.find(role => role.name === "PC");
		const PRCRPRole = msg.guild.roles.cache.find(role => role.name === "Project City RP");
		const consoleemoji = '🎮';
		const pcemoji = '⌨️';
		const prcrpemoji = '👮‍♂️';
		let embed = new Discord.MessageEmbed()
			.setColor('#006aff')
			.setTitle('Do you want a role? Here\s how to get one!')
			.setDescription('React to this post with one of the emotes below to get a role:')
			.addFields(
				{ name: 'What do you play on?', value: '🎮 ➤ Console\n⌨️ ➤ PC' },
				{ name: 'You can also get these roles:', value: '👮‍♂️ ➤ Project City RP' },
				{ name: '\u200B', value: 'If you want to remove a role and haven\'t reacted yet, just react the the role and remove your reaction.' },
			)

			.setImage('https://i.stack.imgur.com/Fzh0w.png')
			.setFooter("\u2800".repeat(100) + "|")
		//.setImage('');
		let msgembed = await msg.channel.send(embed)
		msgembed.react(consoleemoji);
		msgembed.react(pcemoji);
		msgembed.react(prcrpemoji);

		client.on('messageReactionAdd', async (reaction, user) => {
			// When a reaction is received, check if the structure is partial
			if (reaction.message.partial) await reaction.message.fetch();
			if (reaction.partial) await reaction.fetch();
			if (user.bot) return;
			if (!reaction.message.guild) return;

			let message = reaction.message, emoji = reaction.emoji;
			if (reaction.message.channel.id == channel) {
				if (emoji.name == consoleemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.add(consoleRole)
					console.log('ADDED Console');
				}
				if (emoji.name == pcemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.add(PCRole)
					console.log('ADDED PC');
				}
				if (emoji.name == prcrpemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.add(PRCRPRole)
					console.log('ADDED PRCRP');
				}
			} else {
				return;
			}
		});
		client.on('messageReactionRemove', async (reaction, user) => {
			// When a reaction is received, check if the structure is partial
			if (reaction.message.partial) await reaction.message.fetch();
			if (reaction.partial) await reaction.fetch();
			if (user.bot) return;
			if (!reaction.message.guild) return;

			let message = reaction.message, emoji = reaction.emoji;
			if (reaction.message.channel.id == channel) {
				if (emoji.name == consoleemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.remove(consoleRole)
					console.log('REMOVED Console');
				}
				if (emoji.name == pcemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.remove(PCRole)
					console.log('REMOVED PC');
				}
				if (emoji.name == prcrpemoji) {
					await reaction.message.guild.members.cache.get(user.id).roles.remove(PRCRPRole)
					console.log('REMOVED PRCRP');
				}
			} else {
				return;
			}
		});
	}
}
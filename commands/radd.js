module.exports = {
	name: 'radd',
	description: "Adds users to preselected groups!",
	
	async execute(msg, args) {

	if (!args.length) {
		msg.reply(`You didn't provide a role!`);
		return;
	} else if (args[0] === 'CoD') {
		var role = msg.guild.roles.cache.get("791144872593588234");
	} else if (args[0] === 'Minecraft') {
		var role = msg.guild.roles.cache.get('791145184934232064');
	} else if (args[0] === 'Valorant') {
		var role = msg.guild.roles.cache.get('791145222541148181');
	} else if (args[0] === 'Fortnite') {
		var role = msg.guild.roles.cache.get('791145263955050526');
	} else {
		msg.reply("The group specified doesn't exist!");
		return;
	};
	if (msg.member.roles.cache.has(role.id)) {
		msg.reply("You already have that role!");
		return;
	}
	try {
		await msg.member.roles.add(role);
	} catch (e) {
		console.log(e);
		console.error;
	}
	msg.channel.send(`Added the role: -${role.name}- to ${msg.author}`);
	}
}
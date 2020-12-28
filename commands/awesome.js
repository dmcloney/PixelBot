module.exports = {
	name: 'awesome',
	description: "Responds with you are awesome!",

	execute(msg, args) {
		msg.channel.send(`${msg.author} is awesome!`).catch(console.error);
	}
}
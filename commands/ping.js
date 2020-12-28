module.exports = {
	name: 'ping',
	description: "Pings the bot and shows the response time!",

	execute(msg, args) {
		const timeTaken = Date.now() - msg.createdTimestamp;
		msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
			.catch(console.error);
		return;
	}
}
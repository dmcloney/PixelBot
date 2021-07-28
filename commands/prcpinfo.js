module.exports = {
	name: 'pcrpinfo',
	description: "Puts a message in PCRPInfo Chat on Farva's Server",

	execute(msg, args) {
		msg.channel.send(``).catch(console.error);
	}
}
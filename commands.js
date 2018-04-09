var CommandSet = require('discord-routes').CommandSet;
exports.listen = function (client, name) {
	var commands = new CommandSet(client, name);
	commands.set('', req => {
		req.channel.send('<@' + req.author.id + '>\n!toospicy de-spice <message-id>\nTo get a message ID, check out this:\nhttps://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-');
	});
	commands.set('de-spice', (req, args) => {
		if (args.length < 1) {
			req.reply('What message do you wish to de-spice?');
			return;
		}
		var msgId = args[0];
		var channel = req.channel;
		channel.fetchMessage(msgId).then((msg) => {
			var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
			if (!msg.attachments.array().length && !msg.content.match(urlRegex)) {
				req.reply('what\'s to de-spice?');
				return;
			}
			msg.delete();
			channel.send('<@' + msg.author.id + '> was de-spiced by <@' + req.author.id + '>!');
		}, (err) => {
			req.reply('I couldn\'t de-spice that message. Are you sure that ID is right?');
		});
	});
	commands.listen();
}

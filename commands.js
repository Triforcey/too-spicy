exports.Commands = class {
	constructor(client) {
		this.client = client;
	}
	tooSpicy(channel, msgId, req) {
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
	}
};

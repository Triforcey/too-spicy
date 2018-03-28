exports.Commands = class {
	constructor(client) {
		this.client = client;
	}
	tooSpicy(channel, msgId, req) {
		channel.fetchMessage(msgId).then((msg) => {
			if (!msg.attachments.array().length) {
				req.reply('what\'s to de-spice?');
				return;
			}
			msg.delete();
			channel.send('<@' + msg.author.id + '> was de-spiced by <@' + req.author.id + '>!');
		}, (err) => {
			req.reply('I couldn\'t de-spice that message. Are you sure that ID is right?');
		});
	};
};

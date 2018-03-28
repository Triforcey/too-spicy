var discord = require('discord.js');
var client = new discord.Client();
var Commands = require('./commands.js').Commands;
var commands = new Commands(client);
var presence = require('./presence.js');
var presenceTimer = new presence.Timer(client);
client.on('ready', function () {
	presenceTimer.startTimer(300000, 600000);
	console.log('Bot ready! Logged in as "' + client.user.tag + '".');
});

client.on('message', function (msg) {
	var arguments = msg.content.toLowerCase().split(' ');
	if (arguments.length < 0) return;
	if (arguments.shift() != '!toospicy') return;
	switch (arguments.shift()) {
		case 'de-spice':
			if (!arguments.length) {
				msg.reply('you\'re missing arguments!\n!toospicy de-spice <message-id>');
				break;
			}
			commands.tooSpicy(msg.channel, arguments[0], msg);
			break;
		default:
			msg.channel.send('<@' + msg.author.id + '>\n!toospicy de-spice <message-id>\nTo get a message ID, check out this:\nhttps://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-');
	}
});

client.login(process.env.DISCORD_TOKEN);

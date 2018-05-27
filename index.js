var discord = require('discord.js');
var client = new discord.Client();
var presence = require('presence-timer');
var presenceTimer = new presence.Timer(client);
var commands = require('./commands.js');

client.once('ready', function () {
	presenceTimer.startTimer(300000, 600000);
	commands.listen(client, '!toospicy');
	console.log('Bot ready! Logged in as "' + client.user.tag + '".');
});

client.login(process.env.DISCORD_TOKEN);

client.on('error', console.error);

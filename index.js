require('dotenv').config();

const CommandoClient = require('discord.js-commando');
let client = new CommandoClient();
const presence = require('presence-timer');
let presenceTimer = new presence.Timer(client);
let commands = require('./commands.js');

client.once('ready', function () {
	presenceTimer.startTimer(300000, 600000);
	commands.listen(client, '!toospicy');
	console.log('Bot ready! Logged in as "' + client.user.tag + '".');
});

client.login(process.env.DISCORD_TOKEN);

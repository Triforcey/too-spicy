exports.Timer = class {
	constructor(client) {
		this.client = client;
	}
	startTimer(minTime, maxTime) {
		function timeLoop(client) {
			var users = client.users.array();
			var presences = [];
			for (var i = 0; i < users.length; i++) {
				let game = users[i].presence.game;
				if (game) presences.push(users[i].presence);
			}
			var presence = presences[Math.floor(Math.random() * presences.length)];
			client.user.setPresence(presence);
			var delay = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
			setTimeout(timeLoop, delay, client);
		}
		timeLoop(this.client);
	}
};

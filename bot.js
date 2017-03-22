const SlackBot = require('slackbots');

module.exports = function(params) {
	this.bot = null;
	var self = this;
	this.connect = function() {
		self.bot = new SlackBot({
								token:process.env.SLACK_BOT_TOKEN,
								name:'dumb_bot'
								});
		self.bot.on('start', this.onStart);
		self.bot.on('message', this.onEvent);
		self.bot.postMessageToUser('alexandre', 'meow!', params); 
	}
	this.onStart = function() {
		console.log("Started")

	}
	this.onEvent = function(event) {
		//reception d'un message
		console.log(event);
		self.bot.postMessageToUser('alexandre', 'Reception d\'un massage!', params);
	}
}
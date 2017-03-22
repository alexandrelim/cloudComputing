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
		var params = {
	        
    	};
    	/*
    	if(event.type=='message'){
    		self.bot.postMessageToUser("alexandre", 
								event, 
								params);
		&& event.channel.charAt(0) == 'D' 
		}*/
		if(event.type=='message' 
			&& !event.bot_id ) {
			setTimeout(function(){
				self.bot.postMessage(event.channel, 
									'Hellow you :3', 
									params);
			},3000);
		}
	}
}
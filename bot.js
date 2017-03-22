const SlackBot = require('slackbots');

module.exports = function(params) {
	this.bot = null;
	var self = this;
	
	this.connect = function() {
		self.bot = new SlackBot({
								token:process.env.SLACK_BOT_TOKEN,
								name:'dumb_bot'
								});
		self.bot.postMessageToUser('alexandre', 'meow!', params); 
		self.bot.on('start', this.onStart);
		self.bot.on('message', this.onEvent);
		
	}
	var myid = 0;
	this.onStart = function() {
		console.log("Started")

		self.bot.getUser(self.bot.self.name).then(function(user) {
			myid = user.name;
			console.log(user);
		});
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
		
		}*/
		if(event.type=='message' 
			&& event.username != myid) {
			console.log(event);

			if(event.bot_id){
				setTimeout(function(){
					self.bot.postMessage(event.channel, 
										'Hellow bot', 
										params);
				},2000);
			}else{
				self.bot.postMessage(event.channel, 
									'Hellow you :3', 
									params);
				
			}
		}
	}
}
const request = require('request');

const messenger  = {
	//sets API key to be util.isUndefined(arg);
	config : function (FB_PAGE_ACCESS_TOKEN, GLOBALS){
			
			this.FB_PAGE_ACCESS_TOKEN = FB_PAGE_ACCESS_TOKEN,
			this.GLOBALS = GLOBALS
		},
	//sends respond to ant message
	handleMessage : function (sender_psid, received_message) {
		  	let response;
		  	// response for any message is to ask user to turn notifications on or off
	  		response = {
			  "attachment": {
			    "type": "template",
			    "payload": {
					"template_type":"button",
					"text":"Set notifications to ",
					"buttons":[
					  	{
					  		"type": "postback",
				            "title": "Off",
				            "payload": "on",
					  	},
				        {
				            "type": "postback",
				            "title": "On",
				            "payload": "off",
				        }
					]
				}
			  }
			}
			// Sends the response message
			this.callSendAPI(sender_psid, response);    
		},
	//sends responce to post backs
	handlePostback : function (sender_psid, received_postback) {
			let response;
			// Get the payload for the postback
			let payload = received_postback.payload;
			// Set the response based on the postback payload
			if (payload === 'on') {
				sendMessageOn = 1 
				this.GLOBALS.notificationRef.set(1)
				response = { "text": "Notoficaions are On" }
			} else if (payload === 'off') {
				sendMessageOn = 0
				this.GLOBALS.notificationRef.set(0)
				response = { "text": "Notoficaions are Off" }
			}
			// Send the message to acknowledge the postback
			this.callSendAPI(sender_psid, response);
		},
	//calls Sender API to send messages
	callSendAPI : function(sender_psid, response) {
			// Construct the message body
			let request_body = {
				"recipient": {
				  "id": sender_psid
				},
				"message": response
			}
			// Send the HTTP request to the Messenger Platform
			request({
				"uri": "https://graph.facebook.com/v2.6/me/messages",
				"qs": { "access_token": this.FB_PAGE_ACCESS_TOKEN },
				"method": "POST",
				"json": request_body
					}, function (err, res, body){
				if (!err) {
				  	this.GLOBALS.log('message sent!')
				} else {
					this.GLOBALS.error("Unable to send message:" + err);
				}
			}.bind(this) ); 
		}

}

module.exports = messenger;


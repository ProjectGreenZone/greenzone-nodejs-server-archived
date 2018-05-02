const messure = require('./messure');

const worker  = {
	//sets API key to be util.isUndefined(arg);
	config : function (GLOBALS){
			this.GLOBALS = GLOBALS
		},

	// sets event listner on for any changes in database
	start: function (user_id){
			if(this.GLOBALS.db_ref_user_arry[user_id] === undefined){
				this.GLOBALS.db_ref_user_arry[user_id] = {
					ref: this.GLOBALS.db.ref("users/" + user_id + "/"),
					func: this.user_watch_function.bind(this)
				}
			}
			this.GLOBALS.db_ref_user_arry[user_id].ref.off("value", this.GLOBALS.db_ref_user_arry[user_id].func)
			this.GLOBALS.db_ref_user_arry[user_id].ref.on("value", this.GLOBALS.db_ref_user_arry[user_id].func)
			
		},

	// sets event listner off
	stop: function(user_id){
			if(this.GLOBALS.db_ref_user_arry[user_id] === undefined){
				this.GLOBALS.db_ref_user_arry[user_id] = {
					ref: this.GLOBALS.db.ref("users/" + user_id + "/"),
					func: this.user_watch_function.bind(this)
				}
			}
			this.GLOBALS.db_ref_user_arry[user_id].ref.off("value", this.GLOBALS.db_ref_user_arry[user_id].func)
			this.GLOBALS.db_ref_user_arry[user_id].ref.once("value" function (user_snap){
				let user = user_snap.val()
				let trackers = user.trackers

				for(var i=0; i<trackers.length; i++){
					let tracker_id = trackers[i]
					if(this.GLOBALS.db_ref_tracker_arry[tracker_id] === undefined){
						this.GLOBALS.db_ref_tracker_arry[tracker_id] = {
							ref: this.GLOBALS.db.ref("trackers/" + tracker_id + "/"),
							func: this.tracker_watch_function.bind(this)
						}
					}
					this.GLOBALS.db_ref_tracker_arry[tracker_id].ref.off("value", this.GLOBALS.db_ref_tracker_arry[tracker_id].func)
				}
			}.bind(this))


		},

	user_watch_function: function(user_snap){
		let user = user_snap.val()
		let trackers = user.trackers

		for(var i=0; i<trackers.length; i++){
			let tracker_id = trackers[i]
			if(this.GLOBALS.db_ref_tracker_arry[tracker_id] === undefined){
				this.GLOBALS.db_ref_tracker_arry[tracker_id] = {
					ref: this.GLOBALS.db.ref("trackers/" + tracker_id + "/"),
					func: this.tracker_watch_function.bind(this)
				}
			}
			this.GLOBALS.db_ref_tracker_arry[tracker_id].ref.off("value", this.GLOBALS.db_ref_tracker_arry[tracker_id].func)
			this.GLOBALS.db_ref_tracker_arry[tracker_id].ref.on("value", this.GLOBALS.db_ref_tracker_arry[tracker_id].func)
		}
		
	},

	tracker_watch_function: function(tracker_snap){
		//check on masters and send messages to them
		console.log("subed")
	}

}

module.exports = worker;


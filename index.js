'use strict';

require('dotenv').config();
const express = require('express')
const firebase = require('firebase')
const app = express()
const bodyParser = require('body-parser')
const request = require('request');
const path = require('path');
const bunyan = require('bunyan');

//GLOBAL variable to pass GLOBAL static objects to deifernat functions eg: firebase database connection
var GLOBALS = new Object;

GLOBALS.log = bunyan.createLogger({name: 'givemyspace-server'});


GLOBALS.PORT = process.env.PORT || 5000
GLOBALS.FIREBASE = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
  }
GLOBALS.FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN
GLOBALS.FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN


GLOBALS.messenger = require('./utils/messnger.js');
GLOBALS.messenger.config(GLOBALS.FB_VERIFY_TOKEN);


const worker = require('./utils/worker.js');
worker.config(GLOBALS)

//initiaize firebase
firebase.initializeApp(GLOBALS.FIREBASE);
GLOBALS.db = firebase.database();


//referances for firebase database
GLOBALS.db_ref_app = GLOBALS.db.ref("app/");
GLOBALS.db_ref_users = GLOBALS.db.ref("users/");
GLOBALS.db_ref_user_arry = []
GLOBALS.db_ref_trackers = GLOBALS.db.ref('trackers/');
GLOBALS.db_ref_tracker_arry = []

//Main loop to add workers to listen
GLOBALS.db_ref_app.on("value", function(app_snap) {
  let app = app_snap.val();
  let all_users = app.all_users
  
  for(var i = 0; i< all_users.length ;i++ ){
    if(all_users[i].active){
      worker.start(all_users[i].user)
      GLOBALS.log.info("Started worker to notify " + all_users[i].user)
    } else {
      worker.stop(all_users[i].user)
      GLOBALS.log.warn("Stoping worker to notify " + all_users[i].user)
    }
    
  }
}.bind(this))


















// app.use(bodyParser.json())

// // app.get('/', function(req, res) {
// // 	res.sendFile(path.join(__dirname + '/site/index.html'));
// // })

// app.use('/', express.static(__dirname + '/site'));

// app.post('/webhook', (req, res) => {  

//   // Parse the request body from the POST
//   let body = req.body;

//   // Check the webhook event is from a Page subscription
//   if (body.object === 'page') {

//     // Iterate over each entry - there may be multiple if batched
//     body.entry.forEach(function(entry) {

//       // Get the webhook event. entry.messaging is an array, but 
//       // will only ever contain one event, so we get index 0
//       let webhook_event;
//       if(entry.messaging){
//       	webhook_event = entry.messaging[0];
//       }else if(entry.standby){
//       	webhook_event = entry.standby[0];
//       }
      
//       if(webhook_event){
// 	      // Get the sender PSID
// 		  let sender_psid = webhook_event.sender.id;
// 		  console.log('Sender PSID: ' + sender_psid);

// 		  // Check if the event is a message or postback and
// 		  // pass the event to the appropriate handler function
// 		  if (webhook_event.message) {
// 		    messenger.handleMessage(sender_psid, webhook_event.message);        
// 		  } else if (webhook_event.postback) {
// 		    messenger.handlePostback(sender_psid, webhook_event.postback);
// 		  }
//       }else{
//       	console.log("Event not identified");
//       	console.log(entry);
//       }
//     });

//     // Return a '200 OK' response to all events
//     res.status(200).send('EVENT_RECEIVED');

//   } else {
//     // Return a '404 Not Found' if event is not from a page subscription
//     res.sendStatus(404);
//   }

// });

// // Accepts GET requests at the /webhook endpoint
// app.get('/webhook', (req, res) => {
  
//   /** UPDATE YOUR VERIFY TOKEN **/
  
//   // Parse params from the webhook verification request
//   let mode = req.query['hub.mode'];
//   let token = req.query['hub.verify_token'];
//   let challenge = req.query['hub.challenge'];
    
//   // Check if a token and mode were sent
//   if (mode && token) {
  
//     // Check the mode and token sent are correct
//     if (mode === 'subscribe' && token === FB_VERIFY_TOKEN) {
      
//       // Respond with 200 OK and challenge token from the request
//       console.log('WEBHOOK_VERIFIED');
//       res.status(200).send(challenge);
    
//     } else {
//       // Responds with '403 Forbidden' if verify tokens do not match
//       res.sendStatus(403);      
//     }
//   }
// });


app.listen(GLOBALS.PORT, () => GLOBALS.log.info('Give My Space Server is listening on port '.concat('',GLOBALS.PORT)))


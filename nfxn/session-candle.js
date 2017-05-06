/*
SESSION CANDLE
Return the candle number for the session
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

// NFXN Dependencies
var marketHours = require('./market-hours.js'),
	marketSession = require('./market-sessions.js');


exports.candle = function(){

	if(tradeSession == "Sydney / Tokyo (2nd)"){
		// Session Gap (12:00am - 2:00am)
		console.log("(1) Sydney / Tokyo Session End: " + marketSession.sessionSydneyTokyoEnd);
	}
	if(tradeSession == "Session Gap"){
		// Session Gap (2:00am - 2:59am)
		console.log("(2) Session Gap Session: " + marketSession.sessionSessionGap);
	}
	if(tradeSession == "London"){
		// London (3:00am - 7:59am)
		console.log("(3) London Session: " + marketSession.sessionLondon);
	}
	if(tradeSession == "London / New York"){
		// London / New York (8:00am - 11:59am)
		console.log("(4) London / New York Session: " + marketSession.sessionLondonNewYork);
	}
	if(tradeSession == "New York"){
		// New York (12:00pm - 4:59pm)
		console.log("(5) New York Session: " + marketSession.sessionNewYork);
	}
	if(tradeSession == "Sydney"){
		// Sydney (5:00pm - 7:59pm)
		console.log("(6) Sydney Session: " + marketSession.sessionSydneyBegin);
	}
	if(tradeSession == "Sydney / Tokyo (1st)"){
		// Sydney / Tokyo (8:00pm - 11:59am)
		console.log("(7) Sydney / Tokyo Session Start: " + marketSession.sessionSydneyTokyoBegin);
	}
}; 
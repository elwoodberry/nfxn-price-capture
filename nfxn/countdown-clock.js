/* 
COUNTDOWN CLOCK
This script will tell the user how long before the market opens again.

Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

var nextSunday = moment().day(7).hour(17).minutes(0).seconds(0).format("dddd, MMMM Do YYYY, h:mm:ss a"),
	currentTime = moment().format("h:mm:ss a"),
	dayName = moment().format('dddd'),
	timeSetInterval;

var timeFromNow = function(){

	var now = moment(),
		marketOpen = moment().day(7).hour(17).minutes(0).seconds(0).milliseconds(0),
		diffTimeFromNow = marketOpen.diff(now, 'milliseconds'),
		timer = moment(diffTimeFromNow).format("h:mm:ss");

	console.log("Market Opens In: " + timer);
};

// Time From Now
exports.showTimeFromNow = function(status) {

		console.log("It Is " + dayName);
		console.log("The Current Time Is " + currentTime);

		if(status !== "Open"){

			console.log("The Market Opens Again On: " + nextSunday);

			var timeSetInterval = setInterval(timeFromNow, 1000);

		} else {

			clearInterval(timeSetInterval);

		}
    
    };
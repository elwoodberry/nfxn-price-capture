
// Dependencies
var moment = require('moment');

// Parse Time
var now = moment();
var day = moment().day();
var hour = moment().hour();
var minute = moment().minute();
var second = moment().second();
var nextSunday = moment().day(7).hour(17).minute(0).second(0).format("dddd, MMMM Do YYYY, h:mm:ss a");


// Where are we in the market?
// Condition 1: Is it Saturday?
if (day == 6) {
    console.log(" It's Saturday. The market is closed. ");

    // How long before the market opens?
    console.log(nextSunday);

// Condition 2: Is it Sunday?
} else if (day == 0) {
    console.log("It's Sunday.");

    if(hour >= 17){

    	console.log(" The Market Is Open. ");
    	
    } else {
    	
		var marketOpen = moment().hour(17).minutes(0).seconds(0).milliseconds(0);
		var hoursToOpen = marketOpen.diff(now, 'hours');

		console.log("The Market Is Closed.");
		console.log(hoursToOpen + " hours before the market opens.");
    	
    }

// Condition 3: Is it Friday?
} else if (day == 5) {
    console.log(" It's Friday. ");

// Condition 4: The market is open
} else {
	console.log(" The Market Is Open ");
}

/* 
NFXN: PRICE
From market open to market close, gather price data for currency pairs. Evaluate the open, close, high 
and low price for every minute candle.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

// NFXN Dependencies
var marketHours = require('./nfxn/market-hours.js');
var topOfTheMinute = require('./nfxn/top-of-the-minute.js');
var pricePairs = require('./nfxn/price-pairs.js');

// Parse Time
var now = moment();
var day = moment().day();
var hour = moment().hour();

var nextSunday = moment().day(7).hour(17).minute(0).second(0).format("dddd, MMMM Do YYYY, h:mm:ss a");
var marketOpen = moment().hour(17).minutes(0).seconds(0).milliseconds(0);
var hoursToOpen = marketOpen.diff(now, 'hours');


// Condition 1: Is it Saturday?
if (day == 6) {
    console.log(" It's Saturday. The market is closed. ");

    // How long before the market opens?
    console.log(nextSunday);

// Condition 2: Is it Sunday?
} else if (day == 0) {
    console.log("It's Sunday.");

    if(hour >= 17){

    	console.log("The Market Is Open.");

        marketHours.session();

        topOfTheMinute.countdown();

    } else {
    	
        console.log("The Market Is Closed.");
        console.log(hoursToOpen + " hours before the market opens.");

        var showHoursToOpen = function () {
                console.log(hoursToOpen + " hours before the market opens.");
            };

        var everyFifteenMinutes = setInterval(showHoursToOpen, 60000);
    }

// Condition 3: Is it Friday?
} else if (day == 5) {
    console.log(" It's Friday. ");

// Condition 4: The market is open
} else {
	console.log("The Market Is Open.");

    marketHours.session();

    topOfTheMinute.countdown();

}

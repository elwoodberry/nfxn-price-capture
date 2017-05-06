/* 
NFXN: PRICE
From market open to market close, gather price data for currency pairs. Evaluate the open, close, high 
and low price for every minute candle.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

// NFXN Dependencies
var marketHours = require('./nfxn/market-hours.js'),
    topOfTheMinute = require('./nfxn/top-of-the-minute.js'),
    countdownClock = require('./nfxn/countdown-clock.js');

// Parse Time. Variables Return Integers.
var day = moment().day(),
    hour = moment().hour();

var status;

// Condition 1: Is it Saturday?
if (day == 6) {
    
    var status = "Closed";
    console.log("The Market Is " + status + ".");

    countdownClock.showTimeFromNow(status);

// Condition 2: Is it Sunday?
} else if (day == 0) {
    
    console.log("It's Sunday.");

    if(hour >= 17){

        var status = "Open";
        console.log("The Market Is " + status + ".");

        marketHours.session();

        topOfTheMinute.countdown();

    } else {

        var status = "Closed";
        console.log("The Market Is " + status + ".");

    }

// Condition 3: Is it Friday?
} else if (day == 5) {

    console.log("It's Friday.");

   if(hour <= 17){

        var status = "Open";
        console.log("The Market Is " + status + ".");

        marketHours.session();

        topOfTheMinute.countdown();

    } else {

        var status = "Closed";
        console.log("The Market Is " + status + ".");

    }

// Condition 4: The market is open
} else {

    marketHours.session();

    topOfTheMinute.countdown();

}


// Dependencies
var moment = require('moment');

// Parse Time
var now = moment();
var day = moment().day();
var hour = moment().hour();
var minute = moment().minute();
var second = moment().second();
var nextSunday = moment().day(7).hour(17).minute(0).second(0).format("dddd, MMMM Do YYYY, h:mm:ss a");
var marketOpen = moment().hour(17).minutes(0).seconds(0).milliseconds(0);
var hoursToOpen = marketOpen.diff(now, 'hours');

var marketHours = function(){
    var phraseOne = "We Are In The ";
    var phraseTwo = " Session";

    var sydney = phraseOne + "Sydney" + phraseTwo;
    var tokyo = phraseOne + "Tokyo" + phraseTwo;
    var london = phraseOne + "London" + phraseTwo;
    var newyork = phraseOne + "New York" + phraseTwo;
    var sydneyTwo = phraseOne + "Sydney" + phraseTwo;
    var tokyoTwo = phraseOne + "Tokyo" + phraseTwo;

    var currentTime = moment().format("h:mm:ss a");
    var currentMinute = moment().format("mm");

    console.log("The Current Time Is " + currentTime);

    // Sydney (12:00am - 2:00am)
    if(hour >= 0 && hour <=2 ){
        console.log(sydney);
    }
    // Tokyo (12:00am - 2:15am)
    if(hour >= 0 && hour <= 2){
        console.log(tokyo);
    }
    // London (3:00am - 12:00pm)
    if(hour >= 3 && hour <= 12){
        console.log(london);
    }
    // New York (8:00am - 5:00pm)
    if(hour >= 8 && hour <= 17){
        console.log(newyork);
    }
    // Sydney (5:00pm - 11:59pm)
    if(hour >= 17 && hour <= 11){
        console.log(sydneyTwo);
    }
    // Tokyo (8:00pm - 11:59pm)
    if(hour >= 8 && hour <= 11){
        console.log(tokyoTwo);
    }
};



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

    	console.log("The Market Is Open.");

        marketHours();

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

    marketHours();
    
}

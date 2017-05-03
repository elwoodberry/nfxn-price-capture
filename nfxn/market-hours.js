/* 
MARKET HOURS
This script determines the trading session.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

exports.session = function(){
    var phraseOne = "We Are In The ",
        phraseTwo = " Session",
        sydney = phraseOne + "Sydney" + phraseTwo,
        tokyo = phraseOne + "Tokyo" + phraseTwo,
        london = phraseOne + "London" + phraseTwo,
        newyork = phraseOne + "New York" + phraseTwo,
        sydneyTwo = phraseOne + "Sydney" + phraseTwo,
        tokyoTwo = phraseOne + "Tokyo" + phraseTwo;

    var hour = moment().hour();
        currentTime = moment().format("h:mm:ss a"),
        currentMinute = moment().format("mm");

    console.log("The Current Time Is " + currentTime);

    // Sydney (12:00am - 2:00am)
    if(hour >= 0 && hour <=2 ){
        return console.log(sydney);
    }
    // Tokyo (12:00am - 2:15am)
    if(hour >= 0 && hour <= 2){
        return console.log(tokyo);
    }
    // London (3:00am - 12:00pm)
    if(hour >= 3 && hour <= 12){
        return console.log(london);
    }
    // New York (8:00am - 5:00pm)
    if(hour >= 8 && hour <= 17){
        return console.log(newyork);
    }
    // Sydney (5:00pm - 11:59pm)
    if(hour >= 17 && hour <= 11){
        return console.log(sydneyTwo);
    }
    // Tokyo (8:00pm - 11:59pm)
    if(hour >= 8 && hour <= 11){
        return console.log(tokyoTwo);
    }

};
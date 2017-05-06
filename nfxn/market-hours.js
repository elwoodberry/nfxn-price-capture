/* 
MARKET HOURS
This script determines the trading session.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

exports.session = function(){

    var sydneyTokyoEnd = "Sydney / Tokyo (2nd)",
        sessionGap = "Session Gap"
        london = "London",
        londonNewYork = "London / New York"
        newyork = "New York",
        sydneyBegin = "Sydney",
        sydneyTokyoBegin = "Sydney / Tokyo (1st)";

    var hour = moment().hour(),
        minute = moment().format("mm");

    // Sydney/Tokyo (12:00am - 1:59am)
    if (hour >= 0 && hour <= 1 && minute >= 0 && minute <= 59){
        // console.log(sydneyTokyoEnd);
        return String(sydneyTokyoEnd);
    }

    // Session Gap (2:00am - 2:59am)
    if (hour == 2 && minute >= 0 && minute <= 59){
        // console.log(sessionGap);
        return String(sessionGap);
    }

    // London (3:00am - 7:59am)
    if (hour >= 3 && hour <= 7 && minute >= 0 && minute <= 59){
        // console.log(london);
        return String(london);
    }

    // London / New York (8:00am - 11:59am)
    if (hour >= 8 && hour <= 11 && minute >= 0 && minute <= 59){
        // console.log(londonNewYork);
        return String(londonNewYork);
    }

    // New York (12:00pm - 4:59pm)
    if (hour >= 12 && hour <= 16 && minute >= 0 && minute <= 59){
        // console.log(newyork);
        return String(newyork);
    }

    // Sydney (5:00pm - 7:59pm)
    if (hour >= 17 && hour <= 19 && minute >= 0 && minute <= 59){
        // console.log(sydneyBegin);
        return String(sydneyBegin);
    }

    // Sydney / Tokyo (8:00pm - 11:59am)
    if (hour >= 20 && hour <= 23 && minute >= 0 && minute <= 59){
        // console.log(sydneyTokyoBegin);
        return String(sydneyTokyoBegin);
    }

};


exports.tradesession = exports.session();
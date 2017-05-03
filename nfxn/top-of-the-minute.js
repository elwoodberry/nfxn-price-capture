/* 
TOP OF THE MINUTE
The purpose of this script is to guarentee that price data is being 
captured at the beginning of the minute.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

// NFXN Dependencies
var pricePairs = require('./price-pairs.js');

// Variables
var secondsInterval;

// Count Down Clock
exports.countdown = function(){
	
	secondsInterval = setInterval(function(){

		var currentTime = moment().format('h:mm:ss');
		var seconds = moment().format('ss');

		if(seconds == 00){
		    // priceData();
		    console.log("It is now " + currentTime + ". Begin collectioning price data...");

		    pricePairs.eurusd();

		    clearInterval(secondsInterval);
		}else {
		    console.log('Second count: ' + seconds);
		}

	}, 1000);

};



/* 
PRICE PAIR: EUR/USD

Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment'),
	request = require('request'),
    cheerio = require('cheerio'),
	mongojs = require('mongojs');

// NFXN Dependencies
var marketHours = require('./market-hours.js'),
	marketSession = require('./market-sessions.js');

// Database collection name
var pairName = "eurusd",
	weekOf = moment().day(0).format('YYYY-MM-DD'),
	pairCollection = String(pairName + "_" + weekOf),
	db = mongojs('mongodb://fibonacci:fibonacci@ds117109.mlab.com:17109/price');
	

// Local Variables
var eurUsdMinuteData = [],
	priceDataInterval;

// Parse Time
var year = moment().format('YYYY'), // ie: 2017
	week = moment().format('w'), // Returns a number between 0 - 51
	day = moment().day(), // Returns a number between 0 - 6
	dayName = moment().format('dddd'), // ie: Monday
	startOfTradeWeek = moment().day(0).hour(17).minute(0).second(0).milliseconds(0),
	startOfDay = moment().startOf('day');

var tradeSession = marketHours.tradesession;



exports.eurusdPair = function(){

	console.log("Name: " + pairCollection); // eurusd_2017-04-30


	priceDataInterval = setInterval(function(){

		request('http://webrates.truefx.com/rates/connect.html?f=html', function(err, resp, body) {
			if(!err && resp.statusCode == 200){
				
				// Cheerio			
				var $ = cheerio.load(body);

				var eurusdPriceBase = $('table tr:first-child td:nth-child(3)').text(),
					eurusdPriceDecimal = $('table tr:first-child td:nth-child(4)').text(),
					eurusdPrice = eurusdPriceBase + eurusdPriceDecimal;

				// CONDITION 1: Data for every minute
				if(eurUsdMinuteData.length <= 59){

					// Push data to the array
					eurUsdMinuteData.push(eurusdPrice);

					// Display the array
					console.log("EUR/USD: " + eurusdPrice);
					console.log(eurUsdMinuteData);
				} 
				// OTHERWISE: Save Data
				else {


					// Set variable data for minute candle object.
					var now = moment(),
						time = moment().add(1, 'm').second(0).format('hh:mm:ss'), // The top of the minute. ie ie: 6:03:00
						dayCandle = now.diff(startOfDay, 'minutes'), // Return the candle number for the day
						sessionCandle = 'no session candle available',
						weekCandle = now.diff(startOfTradeWeek, 'minutes'); // minutes from Sunday up until now
						open = eurUsdMinuteData[0],
						close = eurUsdMinuteData[59],
						high = Math.max.apply(Math, eurUsdMinuteData),
						low = Math.min.apply(Math, eurUsdMinuteData);

					// Build minute candle price object.
					var priceObject = {
						time: time,
						day: day,
						dayName: dayName,
						week: week,
						year: year,
						session: tradeSession,
						sessionCandle: sessionCandle,
						dayCandle: dayCandle,
						weekCandle: weekCandle,
						open: open,
						high: high,
						low: low,
						close: close
					};

					// Display minute candle price object.
					console.log(priceObject);

					console.log("Collection Name: " + pairCollection);

					// Write object to mLab DB
					db.eurusd_20170430.save(priceObject, function(err){
						if(err){
							console.log("NFXN: ERROR\n" + err);
						}
						console.log("The candle data was successfully saved!");
					});

					// clear the array
					eurUsdMinuteData = [];
				}
			}
		});

	}, 1000);
};
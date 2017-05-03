/* 
PRICE PAIRS

Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment'),
	request = require('request'),
    cheerio = require('cheerio');

// EURO || US DOLLAR
exports.eurusd = function(){
	console.log('Collecting price data for EUR/USD.');

	var eurUsdMinuteData = [];
	var getPriceData = 	setInterval(function(){

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
					var year = moment().format('YYYY'),
						week = moment().format('w'),
						date = moment().format('dddd MMM Do'),
						time = moment().format('HH'),
						open = eurUsdMinuteData[0],
						close = eurUsdMinuteData[59],
						high = Math.max.apply(Math, eurUsdMinuteData),
						low = Math.min.apply(Math, eurUsdMinuteData);

					// Build minute candle price object.
					var priceObject = {
						year: year, 
						week: week, 
						date: date, 
						time: time, 
						open: open, 
						close: close, 
						high: high, 
						low: low
					};

					// Display minute candle price object.
					console.log(priceObject);

					// clear the array
					eurUsdMinuteData = [];
				}
			}
		});

	}, 1000);
};

// EURO || BRITISH POUND
exports.eurgbp = function(){
	console.log('Collecting price data for EUR/GBP.');
};

// EURO || JAPENESE YEN
exports.eurjpy = function(){
	console.log('Collecting price data for EUR/JPY.');
};

// EURO || SWISS FRANC
exports.eurchf = function(){
	console.log('Collecting price data for EUR/CHF.');
};

// US DOLLAR || JAPENESE YEN
exports.usdjpy = function(){
	console.log('Collecting price data for USD/JPY.');
};

// US DOLLAR || SWISS FRANC
exports.usdchf = function(){
	console.log('Collecting price data for USD/CHF.');
};

// US DOLLAR || CANADIAN DOLLAR
exports.usdchf = function(){
	console.log('Collecting price data for USD/CHF.');
};

// BRITISH POUND || US DOLLAR
exports.gbpusd = function(){
	console.log('Collecting price data for GBPUSD.');
};

// BRITISH POUND || JAPENESE YEN
exports.gbpjpy = function(){
	console.log('Collecting price data for GBPJPY.');
};

// AUSTRALIAN DOLLAR || US DOLLAR
exports.audusd = function(){
	console.log('Collecting price data for AUDUSD.');
};

function priceData(){

	var eurUsdMinuteData = [],
		usdjpyMinuteData = [],
		gbpusdMinuteData = [],
		eurgbpMinuteData = [],
		usdchfMinuteData = [],
		eurjpyMinuteData = [],
		eurchfMinuteData = [],
		usdcadMinuteData = [],
		audusdMinuteData = [],
		gbpjpyMinuteData = [];

	var getPriceData = 	setInterval(function(){

		request('http://webrates.truefx.com/rates/connect.html?f=html', function(err, resp, body) {
			
			if(!err && resp.statusCode == 200){
				
				var $ = cheerio.load(body);

				// EUR/USD
				var eurusdPriceBase = $('table tr:first-child td:nth-child(3)').text(),
					eurusdPriceDecimal = $('table tr:first-child td:nth-child(4)').text(),
					eurusdPrice = eurusdPriceBase + eurusdPriceDecimal;

				// USD/JPY
				var usdjpyPriceBase = $('table tr:nth-child(2) td:nth-child(3)').text(),
					usdjpyPriceDecimal = $('table tr:nth-child(2) td:nth-child(4)').text(),
					usdjpyPrice = usdjpyPriceBase + usdjpyPriceDecimal;

				// GBP/USD
				var gbpusdPriceBase = $('table tr:nth-child(3) td:nth-child(3)').text(),
					gbpusdPriceDecimal = $('table tr:nth-child(3) td:nth-child(4)').text(),
					gbpusdPrice = gbpusdPriceBase + gbpusdPriceDecimal;

				// EUR/GBP
				var eurgbpPriceBase = $('table tr:nth-child(4) td:nth-child(3)').text(),
					eurgbpPriceDecimal = $('table tr:nth-child(4) td:nth-child(4)').text(),
					eurgbpPrice = eurgbpPriceBase + eurgbpPriceDecimal;

				// USD/CHF
				var usdchfPriceBase = $('table tr:nth-child(5) td:nth-child(3)').text(),
					usdchfPriceDecimal = $('table tr:nth-child(5) td:nth-child(4)').text(),
					usdchfPrice = usdchfPriceBase + usdchfPriceDecimal;

				// EUR/JPY
				var eurjpyPriceBase = $('table tr:nth-child(6) td:nth-child(3)').text(),
					eurjpyPriceDecimal = $('table tr:nth-child(6) td:nth-child(4)').text(),
					eurjpyPrice = eurjpyPriceBase + eurjpyPriceDecimal;

				// EUR/CHF
				var eurchfPriceBase = $('table tr:nth-child(7) td:nth-child(3)').text(),
					eurchfPriceDecimal = $('table tr:nth-child(7) td:nth-child(4)').text(),
					eurchfPrice = eurchfPriceBase + eurchfPriceDecimal;

				// USD/CAD
				var usdcadPriceBase = $('table tr:nth-child(8) td:nth-child(3)').text(),
					usdcadPriceDecimal = $('table tr:nth-child(8) td:nth-child(4)').text(),
					usdcadPrice = usdcadPriceBase + usdcadPriceDecimal;

				// AUD/USD
				var audusdPriceBase = $('table tr:nth-child(9) td:nth-child(3)').text(),
					audusdPriceDecimal = $('table tr:nth-child(9) td:nth-child(4)').text(),
					audusdPrice = audusdPriceBase + audusdPriceDecimal;

				// GBP/JPY
				var gbpjpyPriceBase = $('table tr:nth-child(10) td:nth-child(3)').text(),
					gbpjpyPriceDecimal = $('table tr:nth-child(10) td:nth-child(4)').text(),
					gbpjpyPrice = gbpjpyPriceBase + gbpjpyPriceDecimal;


				if(eurUsdMinuteData.length <= 59){
					eurUsdMinuteData.push(eurusdPrice);

					console.log("EUR/USD: " + eurusdPrice);
					console.log(eurUsdMinuteData);
				}else{
					var year = moment().format('YYYY'),
						week = moment().format('w'),
						date = moment().format('dddd MMM Do'),
						time = moment().format('HH'),
						open = eurUsdMinuteData[0],
						close = eurUsdMinuteData[59],
						high = Math.max.apply(Math, eurUsdMinuteData),
						low = Math.min.apply(Math, eurUsdMinuteData);

					var priceObject = {
						year: year, 
						week: week, 
						date: date, 
						time: time, 
						open: open, 
						close: close, 
						high: high, 
						low: low
					};

					/*
					DEVELOPMENT VERSION
					This version of the script writes to a local JSON file 
					instead of writing directly to the database.
					*/
					var file = 'api/eurusd_2017-01-15.json'
					jsonfile.writeFileSync(file, priceObject);
					console.log(priceObject);

					// clear the array
					eurUsdMinuteData = [];
				}
			}
		});

	}, 1000);

	clearInterval(secondsCheck);

};
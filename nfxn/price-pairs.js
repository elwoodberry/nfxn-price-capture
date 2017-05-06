/* 
PRICE PAIRS

Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment'),
	request = require('request'),
    cheerio = require('cheerio');

// NFXN Dependencies
var ppEurUsd = require('./price-pair_eurusd.js');

// EURO || US DOLLAR
exports.eurusd = function(){
	console.log('Collecting price data for EUR/USD.');

	ppEurUsd.eurusdPair();
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

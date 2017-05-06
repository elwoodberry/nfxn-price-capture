/*
MARKET SESSION
The purpose of this script is to determine how many minutes 
are in every trading session.
Property of NFXN.IO
*/

// Pacakage Dependencies
var moment = require('moment');

// Manipulate Time
var startSydneyTokyoEnd = moment().startOf('day'),
	endSydneyTokyoEnd = moment().hour(2).minute(0),
	lengthSydneyTokyoEnd = endSydneyTokyoEnd.diff(startSydneyTokyoEnd, 'minutes'),

	startSessionGap = moment().hour(2).minute(0),
	endSessionGap = moment().hour(3).minute(0),
	lengthSessionGap = endSessionGap.diff(startSessionGap, 'minutes'),

	startLondon = moment().hour(3).minute(0),
	endLondon = moment().hour(8).minute(0),
	lengthLondon = endLondon.diff(startLondon, 'minutes'),

	startLondonNewYork = moment().hour(8).minute(0),
	endLondonNewYork = moment().hour(12).minute(0),
	lengthLondonNewYork = endLondonNewYork.diff(startLondonNewYork, 'minutes'),

	startNewYork = moment().hour(12).minute(0),
	endNewYork = moment().hour(17).minute(0),
	lengthNewYork = endNewYork.diff(startNewYork, 'minutes'),

	startSydneyBegin = moment().hour(17).minute(0),
	endSydneyBegin = moment().hour(20).minute(0),
	lengthSydneyBegin = endSydneyBegin.diff(startSydneyBegin, 'minutes'),

	startSydneyTokyoBegin = moment().hour(20).minute(0),
	endSydneyTokyoBegin = moment().endOf('day').add(1, 'minute'),
	lengthSydneyTokyoBegin = endSydneyTokyoBegin.diff(startSydneyTokyoBegin, 'minutes');


// Sydney/Tokyo (12:00am - 1:59am)
// 119 minutes in this session
exports.sessionSydneyTokyoEnd = lengthSydneyTokyoEnd;

// Session Gap (2:00am - 2:59am)
// 59 minutes in this session
exports.sessionSessionGap = lengthSessionGap;

// London (3:00am - 7:59am)
// 299 minutes in this session
exports.sessionLondon = lengthLondon;

// London / New York (8:00am - 11:59am)
// 239 minutes in this session
exports.sessionLondonNewYork = lengthLondonNewYork;

// New York (12:00pm - 4:59pm)
// 299 minutes in this session
exports.sessionNewYork = lengthNewYork;

// Sydney (5:00pm - 7:59pm)
// 179 minutes in this session
exports.sessionSydneyBegin = lengthSydneyBegin;

// Sydney / Tokyo (8:00pm - 11:59am)
// 239 minutes in this session
exports.sessionSydneyTokyoBegin = lengthSydneyTokyoBegin;

//alert("JavaScript works!");
//alert("JavaScript works!");
// Author: Elijah Moran
// Date: 005/16/2013
// Project: Week 2 – Preparing for work.
// Class: SDI 1305

// variable declaration

var theCurrentTime = 1500, 
	numberOfMinutes = 10;

var conversation1 = "is the coffee ready? ",
	conversation2 = " he has to leave for work also in 10 minutes!";

var itemsForWorkArray = ["uniform", "wallet", "cell-Phone", "identification"];
var numberInArray = 2;

// First function asks if my alarm clock went off to wake me up
// If it has, then it must be time to wake up
// If not then I have a few more time to sleep
var getOutOfBed = function (alarm)
{
	if (alarm === true)
	{
		console.log("Time to get out of bed!");
	}
	else
	{
		console.log("Well, my alarm did not go off, so I have more time " +
		" to sleep.");
	}
}

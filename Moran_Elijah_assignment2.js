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

// Function used to see if I still have time to eat before work. 
// since it is only 1500 and I leave for work at 1515, I do have time.
var timeToGetReady = function(time)
{
	var outcome;
	var timeToLeaveForWork = 1515;

	if (timeToLeaveForWork > time)
	{	
		outcome = true;
	}
	else
	{
		outcome = false;
	}
	return outcome;	
}
// Brew coffee function.  Basically check on coffee every 2 minutes then count
// how many times I checked on it in that amount of time!
var brewCoffee = function(minutes)
{
	var total;
	var count = 2;

while (minutes >= count)
	{
		console.log("Checked on Coffee at " + count + " minutes");
		count = count + 2;
		total = (count / 2) - 1;

	}
	return total;
}

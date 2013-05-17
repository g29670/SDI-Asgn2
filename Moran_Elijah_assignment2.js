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

// My supervisor calls about me having to be at work in 1 hour!
var conversation = function(first, second)
{
	var middle = "Because "
	var stringTotalConversation = first + middle + second;
	return stringTotalConversation;
}


// the things I take to work array.
var thingsITakeToWork = function(items, specificThing)
{
	for (i = 0; i < 4; i++)
	{
		console.log(items[i]);
	}
	console.log("But I forgot my ");
	return items[specificThing];
}
// main line of code, where all functions get called from and return to.
console.log("My alarm usually wakes me up in the morning  " +
			"when I remember to set it.");

getOutOfBed(true);

console.log("I have to be at work at 1600 hours.");
console.log("The supervisor will be very angry if I am late.")
console.log("Do I still have time to eat something before work " +
"since its " + theCurrentTime + " hours?");

// using if statements, im able to actually do something with the
// boolean return of the timeToGetReady function.
if (timeToGetReady(theCurrentTime) === true)
{
console.log("Yes I do!");
}
else
{
console.log("Oh no! I have to leave right now!");
}
console.log("To start my morning, I will brew a cup of coffee which I check on every" +
			" two minutes.");
console.log("For a total of " + brewCoffee(numberOfMinutes) + " times");	

console.log("My roomate asks " + conversation(conversation1, conversation2))
console.log("The things I pack for work are ");
console.log(thingsITakeToWork(itemsForWorkArray, numberInArray) + " today");

//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if(name==='Tyler') {
		return true;
	}
	else {
		return false;
	}
}





//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
	var name = prompt('What is your name?');
	return name;
}



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 function welcome() {
 	name = getName();
 	alert("Welcome, " + name);
 }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//Parameters are the names/ place holders that we use when we define a function.
//Arguments are the actual values that we pass through a function when we call it.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // null, undefined, ), NaN (not a number), ' ' (empty), false

  //To check ask if whatEverYouWantToCheck === false.  This will return true if it is falsy.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

 function myName() {
 	var name = 'Katie';
 	return name;
 }



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function() {
		return 'Katie';
	};
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();


//Now invoke innerFn.

innerFn

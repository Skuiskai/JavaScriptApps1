//what number would you like to count to?
//By what number would you like to count?
//Count By X App
//comments
function countTo () {
	//first get a max number from the user
	let countMax = Number(prompt("What number would you like to count to?"));
	//beginning of control flow to make sure if countMax is a number and isn't 0
	if (typeof(countMax) === "number" && isNaN(countMax) === false && countMax !== 0) {
		console.log(typeof(countMax));
	//if all went well then you will choose a number to count by up to the next max number that was chosen.
		console.log("Ok good, you chose " + countMax + ". Next choose a number to count by")
		let countByUser = Number(prompt("How many numbers do you want to count by? Cannont exceed the mad number."));
	//Beginning of control flow for the number to be counted by to make sure it doesn't exceed the max or be 0 or be NaN
		while(countByUser > countMax || countByUser === 0 || isNaN(countByUser) === true) {
			if (countByUser > countMax || countByUser === 0 || isNaN(countByUser) === true) {
				if (countByUser === 0) {
					console.log("You can't count by 0. Try again...");
					countByUser = Number(prompt("You can't choose " + countByUser + ". Try again..."));
				} else if (isNaN(countByUser) === true) {
					console.log("That was not a number, try again...")
					countByUser = Number(prompt("That was not a number, try again..."));
				} else if (countByUser > countMax) {
					console.log("You can't choose more than your max count of: " + "(" + countMax + ")" + ". Try again...");
					countByUser = Number(prompt("You can't choose more than your max count of: " + "(" + countMax + ")" + ". Try again..."));
				}
			}
		}
	//End control flow check on on the number chosen to count by up to the max
    
    //Logic for counting up to max number by users chosen number
		let countByUserStore = countByUser;		
		if (typeof(countByUser) === "number" && isNaN(countByUser) === false) {
				while(countByUser <= countMax) {
					console.log(countByUser);
					countByUser = countByUserStore + countByUser;
				}
	//End of logic

		} else {
				console.log("Something went wrong!");
			}
			if (countByUser % countMax !== 0) {
				console.log("remainder of " + countByUser % countMax);
	}

	} else if (countMax === 0){
		console.log("You can not multiply to 0");
	} else {
		console.log("That was not a number!");
	}
	/*This is the end of the control flow for the max number, but 
	it needs to be put into a while loop at the beginning to make sure that
	it keeps asking the question until a suitible number is chosen unless
	the exit string is used in the prompt.*/
	
}

//New program
//triangle
function triangle () {
	let x = "#";
	for (let count = x.length; count <= 7; count++) {
		console.log(x);
		x += "#";
	}
}

//fizzbuzz
//print all numbers from 1 to 100
//divisible by 3 print Fizz
//divisible by 5 print Buzz
//divisible by both print FizzBuzz

function fizzBuzz () {
	let counter = 1;
	while (counter <= 100) {
		if (counter % 3 === 0 && counter % 5 === 0) {
			console.log(counter + " FizzBuzz");
		} else if (counter % 5 === 0) {
			console.log(counter + " Buzz");
		} else if (counter % 3 === 0) {
			console.log(counter + " Fizz");
		}
		counter++; 
	}
}

//chess board
/*
Just keep in mind when programming, to group things in parenthesis when needed.
A for loop inside of another for loop will have the inner for loop do all of its 
rotations before counting as 1 for the outer for loop.
*/
function chessBoard () {
	let size = Number(prompt("what is the width of your board?"));
	let sizeH = Number(prompt('what is the height of your board?'));
	let board = "";

	for (var i = 0; i <= sizeH -1; i++) {
		for(var v = 0; v <= size -1; v++) {
			if ((i + v) % 2 === 0) {
				board += "#";
			} else {
				board += " ";
			}
		}
		board += "\n"
	}
	console.log(board);
}

 
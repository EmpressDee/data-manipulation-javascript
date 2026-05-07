// ===================== BOILER PLATE START =====================
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
	n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
	n1 + n2 + n3 + n4 == 50 &&
	(n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
	!(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
	n1 != n2 &&
	n1 != n3 &&
	n1 != n4 &&
	n2 != n3 &&
	n2 != n4 &&
	n3 != n4;

// ===================== BOILER PLATE END =====================

// Part One:
// Check if all numbers are divisible by 5. Cache the result in a variable:
const DivisibleBy5 = //use const if the variable isnt expected to change
	n1 % 5 === 0 && // && means AND
    n2 % 5 === 0 && 
    n3 % 5 === 0 && 
    n4 % 5 === 0;
console.log(DivisibleBy5);

//Check if the first number is larger than the last. Cache the result in a variable
let LargerNumber = n1 > n4;
console.log(LargerNumber);

//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
// Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.
const remainder = ((n2 - n1) * n3) % n4;


// Change the way that isOver25 calculates so that we do not need to use the
// NOT operator (!) in other logic comparisons. Rename the variable as appropriate
const anyUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;    // || means OR


// Part Two:
// Problem details
const totalMiles = 1500;
const budget = 175;
const avgFuelCost = 3;

// values for the mpg
const mph55 = 30,
const mpg60 = 28;
const mpg75 = 23

// formula: distance/mpg=gallons needed
//55 
const gallons55 = totalMiles / mpg30;
const cost55 = gallons55 * avgFuelCost;
const time55 = totalMiles / mph55;
const inBudget55 = cost55 <= budget;
const hours55 = distance / 55;


// 60 MPH

const gallons60 = totalMiles / mpg28;
const cost60 = gallons60 * avgFuelCost;
const time60 = totalMiles / mph60;
const inBudget60 = cost60 <= budget;
const hours60 = distance / 60;


// 75 MPH

let gallons75 = totalMiles / mpg23;
let cost75 = gallons75 * avgFuelCost;
let time75 = totalMiles / mph75;
const inBudget75 = cost75 <= budget;
const hours75 = distance / 75;





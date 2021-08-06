var myName = 'saydur';
var phoneNumber = '01684548278';
var salary = 220000;
var isYourNameSaydur = true;

// Mathmatical operation 
// addition 
var price1 = 99;
var price2 = 100;
var addition = price1 + price2;
console.log(totalPrice);

// subtruction 
var price1 = 99;
var price2 = 100;
var subtruction = price2 - price1;
console.log(subtruction);

// multiplication 
var price1 = 99;
var price2 = 100;
var multiply = price1 * price2;
console.log(multiply);

// division
var price1 = 99;
var price2 = 100;
var division = price2 / price1;
console.log(division);

// coversion
const firsName = 'Saydur';
const lastName = 'Rahman';

console.log(firsName + ' ' + lastName)

// parseInteger 
var phoneNumber = '01684548278';
var phoneNumber = parseInt(phoneNumber);
console.log(typeof phoneNumber);

// array-index 
var number = [1, 2, 3, 4, 5, 6, 7, 8];
// var number = number.indexOf(3);
// var number = number['2'];
console.log(number);

// array - push - pop
var number = [1, 2, 3, 4, 5, 6, 7, 8];
// number.push(12);
// number.unshift(20);
// number.pop();
// number.shift();
console.log(number);

// comparison
var num1 = 6;
var num2 = 6;
console.log(num1 == num2);

// condition 
var singaraPrice = 20;
var moneyIhave = 20;
if (singaraPrice <= moneyIhave) {
    console.log('give me those singaras');
}
else {
    console.log('i have no singara');
}

// Multiple-Conditions
var singaraPrice = 50;
var pizzaPrice = 60;
var cokePrice = 30;
var chawminPrice = 20;
var moneyIhave = 2000;
var cokeIsCold = true;

if (((singaraPrice + pizzaPrice + cokePrice + pizzaPrice) <= moneyIhave)) {
    console.log('give me all of this');
}
else if (pizzaPrice <= moneyIhave) {
    console.log('give me a plate of pizza');
}
else if (cokePrice <= moneyIhave) {
    if (cokeIsCold == true) {
        console.log('give me a coke');
    }
}
else if (pizzaPrice <= moneyIhave) {
    console.log('give me those pizza');
}
else if (chawminPrice <= moneyIhave) {
    console.log('give me chawmin');
}
else if (singaraPrice <= moneyIhave) {
    console.log('give me those singaras');
}
else {
    console.log('i have nothing');
}


// while loop
var i = 1;
while (i < 10) {
    i++;
    console.log(i);
}


// while loop in array 
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var i = 1;
while (i < 7) {
    var num = nums[i];
    i++;
    console.log(num);
}

// for loop 
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 1; i <= 7; i += 2) {
    var num = nums[i];
    console.log(num);
}


// multiple parameter 
function addition(num1, num2) {
    var addition = num1 + num2;
    console.log(addition);
}
var num1 = 10;
var num2 = 30;
var totalAdditionValue1 = addition(num1, num2);

var num1 = 20;
var num2 = 10;
var totalAdditionValue2 = addition(num1, num2);


// object 
var nid = {
    name: 'M Saydur rahman',
    id: 152049,
    fathersName: 'Father_name',
    motherName: 'Mother_name',
    birthdate: '12-22-21',
}
// nid.name = 'saydur';
// nid['name'] = 'rahman';
console.log(nid);



// switch case 
var color = "red";
switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}



// inches to feet 
function getFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var myInches = 100;
var getMyFeet = getFeet(myInches);
console.log(getMyFeet);



// oddNumber-evenNumber
function getOddNumber(i) {
    if (i % 2 == 1) {
        return true;
    }
    return false;
}

var myNumber = 20;
var isMyNumberIsOddNumber = getOddNumber(myNumber);
console.log('my number is odd =', isMyNumberIsOddNumber);



// year and leap_year 
function leapYear(i) {
    if (i % 4 == 0 && i % 100 != 0) {
        return true;
    }
    return false;
}
var myNumber = 2000;
var isMyNumberLeapYear = leapYear(myNumber);
console.log('my number is laeap year =', isMyNumberLeapYear);



// factorial 
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var myNumber = 6;
var myFactorialNumber = getFactorial(myNumber);
console.log(myFactorialNumber);



// factorial-rverse
function getFactorial(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

var myNumber = 6;
var myFactorialNumber = getFactorial(myNumber);
console.log(myFactorialNumber);



// recursive
// n=n*(n-1)
function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

var myNumber = 5;
var myNumber = factorial(myNumber);
console.log(myNumber);


// fahrenheight calculation
function getFahrenheit(celcius) {
    var fahrenheight = (celcius * 9 / 5) + 32;
    return fahrenheight;
}

var myCelciusNumber = 32;
var calculatingMyFahrenhiet = getFahrenheit(myCelciusNumber);
console.log('My fahrenheit is =', calculatingMyFahrenhiet);



//celcius calculation
function getCelcius(fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

var myFahrenheitNumber = 89.6;
var calculatingMyCelcius = getCelcius(myFahrenheitNumber);
console.log('My celcius is =', calculatingMyCelcius);



// grading system 
let outOfRangeTop = 101;
let outOfRangeBellow = -1;
let a = 80;
let b = 70;
let c = 60;
let d = 50;
let e = 33;
let f = 32;


var myNumber = 10;

if (outOfRangeTop <= myNumber) {
    console.log('Null')
}
else if (outOfRangeBellow >= myNumber) {
    console.log('Null')
}
else if (a <= myNumber) {
    console.log('Got A')
}
else if (b <= myNumber) {
    console.log('Got B')
}
else if (c <= myNumber) {
    console.log('Got C')
}
else if (d <= myNumber) {
    console.log('Got D')
}
else if (e <= myNumber) {
    console.log('Got E')
}
else {
    console.log('Got F')
}




// interest 
function interest(year) {
    var myInterest = 100 * 1.1 ** year;
    return myInterest;
}

var myYear = 7;
var myTotalInterest = interest(myYear);
console.log(myTotalInterest);
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    //Your code above this line
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Write reusable code with functions
function ourReusableFunction() {
    console.log("Heyya, world");
}

ourReusableFunction(); //Function calling 

function reusableFunction() {
    console.log("Hi, World");
}

reusableFunction();

//Passing values to functions with arguments
function ourFuncWithArgs(a, b) {  //Function definition
    console.log(a - b);
}
ourFuncWithArgs(10, 5); //Passing values into the function

//Example two
function funcWthArgs(a, b) {
    console.log(a + b);
}
funcWthArgs(10, 5);

/*Global Scope and Functions
Scope refers to the visiblity of variables
variables declared outside the function are global scopes,
this means they can be seen everywhere in your j code
*/

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//Gobal variable
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater"; //Local variable

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//Return a value from a function with return statement

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

//Understanding undefined value returned from a function
//Functions dont have to have return statements; if you dont specify the return value, it will return undefined

var sum = 0;

function addThree() {
    sum = sum + 3;
}
console.log(addThree(3));

//Assignment of a return value to a variable
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

//Stand in Line
//In computer science a queue is an abstract data structure where items are kept in order
//New items can be added from the back of the queue and old items can be removed from the front of the queue
function nextInLine(arr, item) {
    arr.push(item); //adds an element at the end of an array


    return arr.shift(); //Removes first element in an array

}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean values
function welcomeToBooleans() {
    return false;
}

//Use of Conditional logic with if statements
//If statement is used to make decisions in code

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it is true";
    }
    return "No, it is false";
}
console.log(ourTrueOrFalse(true));

//Comparison operators with the equality operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testEqual(10));

//Comparison with the strict equality operator(use === sign)
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

//Practice comparing different values
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

//Comparing with the inequality operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

//Fuction to print marks
function printMarks(eng, sci, mtc, sst) {
    // var total = eng + sci + mtc + sst;
    // var average = total/4;
    console.log("English: " + eng);
    console.log("Science: " + sci);
    console.log("Maths: " + mtc);
    console.log("Social Science: " + sst);
    // console.log("Total: " + total);
    // console.log("Average: " + average);
}

printMarks(50, 60, 70, 90)

//Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "strokes"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    }
}



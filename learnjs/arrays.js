var ourArray = ["John", 23];

//Only change code below this line
var myArray = ["Joshua", 1];

//Multi demensional array
var ourArray = [["the universe", 42], ["everything", 101010]];

//Accessing arrays

var scoreArray = [50,60,70]; 
var myScore = scoreArray[0];

console.log(myScore);

//Modifying array data with indexes
scoreArray[1] = 90;
console.log(scoreArray)

//Accessing multi-dimensional arrays with indexes
var matrix = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

var myMatrix = matrix[2][1];
console.log(myMatrix);

//Manipulate arrays with push()
//You can append data to the end of an array with the push function
var Name = ["Stimpson", "J", "cat"];
Name.push("happy", "Joy")

console.log(Name);

//Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromArray = ourArray.pop();

console.log(ourArray);

//Manipulate Arrays with shift()
//This removes the first element of the array
var Name = ["Stimpson", "J", "cat"];
var removedFromArray = Name.shift();

console.log(Name); 

//Manipulate arrays with unshift()
//Adds elements at the beggining of the statment 
var Name = ["Stimpson", "J", "cat"];
Name.shift();
Name.unshift("Happy");

console.log(Name);


//Shoping list

var myList = [["Cereal", 3], ["milk",2], ["bananas",3], ["juice",2]];
console.log(myList);


let students = [
    {name: "Rogers", age:20, stdNo: 1},
    {name: "Joshua", age:17, stdNo: 2},
    {name: "Mary", age:22, stdNo: 3},
    {name: "Sharif", age:23, stdNo: 4},
]
// students.map(student => {
//     console.log(`
//         Name: ${student.name}
//         Age: ${student.age} 
//         Student No: ${student.stdNo}`)
// })
// console.log(`Name: ${students[0].name} Age: ${students[0].age} Student No: ${students[0].stdNo}`);
students.map(student => {
    
        if(student.age < 18) {
        }else
        console.log(`
        Name: ${student.name}
        Age: ${student.age} 
        Student No: ${student.stdNo}`)
})

let below18 = students.filter(student => student.age < 18)
console.log(below18);
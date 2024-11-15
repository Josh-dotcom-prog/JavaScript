function caseInSwitch(val) {
    var answer = "";

    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamme";
            break;
        case 4:
            answer = "delta";
            break
    }
    return answer;
}

console.log(caseInSwitch(2));  

//Default option in switch statement
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
    }
    return answer;
}

console.log(switchOfStuff("a"));

//multiple identical options in switch statements
function sequentialSizes(val) {
    var answer = "";

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7: 
        case 8:
        case 9:
            answer = "Hight";
            break;
    }
    return answer;
}

console.log(sequentialSizes(5))
// ARRAY test scores
let testScores = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];

// function (the parameter is the testScores array)
function printAndGetHighScore(testScores) {

    // High score
    let highScore = 0;

    // VARIABLE the score for each bubble solution
    let output;

    // FOR loop
    // POST-INCREMENT OPERATOR: i++ is the shortned version of i = i + 1
    for (let i = 0; i < testScores.length; i++) {
        output = "Bubble solution #" + i +
                    " score: " + testScores[i];
        console.log(output);

        // store highest score in highScore variable
        if(testScores[i] > highScore) {
            highScore = testScores[i];
        }
    }
    return highScore;
}

let highScore = printAndGetHighScore(testScores);

// WHILE loop
/* 
    let i = 0;

    while (i < testScores.length) {
    output = "Bubble solution #" + i + " score: " + testScores[i];
    
    console.log(output);

    i = i + 1;
} */

// total number of bubble scores
console.log("There are " + (testScores.length -1) + " test scores");

// textbook high score solution
console.log("Highest bubble score: " + highScore);

// highest bubble score
console.log("The highest test score was " + Math.max(...testScores));

// function (the parameters are the testScore array and highScore variable)
function getBestResults(testScores, highScore) {
    // solutions with highest bubble score
    let bestSolutions = [];
        for (let i = 0; i < testScores.length; i++) {
            if(testScores[i] == highScore) {
                bestSolutions.push(i);
            }
    }
    return bestSolutions;
}

let bestSolutions = getBestResults(testScores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

// check to see if ARRAY is sparse (undefined index's or index's with no value)
let myArray = [];
myArray[0] = true;
myArray[10] = true;

if(myArray[1] == undefined) {
    console.log("Error: index #1 undefined");
}

// lowest cost exercise

let costs = [.25, .27, .25, .25, .25, .25,
            .33, .31, .25, .29, .27, .22,
            .31, .25, .25, .33, .21, .25,
            .25, .25, .28, .25, .24, .22,
            .20, .25, .30, .25, .24, .25,
            .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(testScores, costs, highScore) {
    let cost = 100;
    let index;

    for(i = 0; i < testScores.length; i++) {
        if(testScores[i] == highScore) {
            if(cost > testScores[i]) {
                index = [i];
                cost = costs[i];
            }
        }
    }
    return index;
}

let mostCostEffective = getMostCostEffectiveSolution(testScores, costs, highScore);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective");
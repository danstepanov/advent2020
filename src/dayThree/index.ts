import inputArray from './input'

// Part One
// Right 3, Down 1
var j: number
var count: number = 0
var iterationCounter: number = 0
for (j = 0; j < inputArray.length; j++) {
    if (inputArray[j].charAt(iterationCounter) === '#') {
        count++
    }
    if (iterationCounter + 3 < inputArray[j].length) {
        iterationCounter += 3
    } else {
        iterationCounter += 3 - inputArray[j].length
    }
}

console.log(count)

// Part Two
// Right 1, Down 1
var a: number
var count1: number = 0
var iterationCounter1: number = 0
for (a = 0; a < inputArray.length; a++) {
    if (inputArray[a].charAt(iterationCounter1) === '#') {
        count1++
    }
    if (iterationCounter1 + 1 < inputArray[a].length) {
        iterationCounter1 += 1
    } else {
        iterationCounter1 += 1 - inputArray[a].length
    }
}

// Right 3, Down 1
var b: number
var count2: number = 0
var iterationCounter2: number = 0
for (b = 0; b < inputArray.length; b++) {
    if (inputArray[b].charAt(iterationCounter2) === '#') {
        count2++
    }
    if (iterationCounter2 + 3 < inputArray[b].length) {
        iterationCounter2 += 3
    } else {
        iterationCounter2 += 3 - inputArray[b].length
    }
}

// Right 5, Down 1
var c: number
var count3: number = 0
var iterationCounter3: number = 0
for (c = 0; c < inputArray.length; c++) {
    if (inputArray[c].charAt(iterationCounter3) === '#') {
        count3++
    }
    if (iterationCounter3 + 5 < inputArray[c].length) {
        iterationCounter3 += 5
    } else {
        iterationCounter3 += 5 - inputArray[c].length
    }
}

// Right 7, Down 1
var d: number
var count4: number = 0
var iterationCounter4: number = 0
for (d = 0; d < inputArray.length; d++) {
    if (inputArray[d].charAt(iterationCounter4) === '#') {
        count4++
    }
    if (iterationCounter4 + 7 < inputArray[d].length) {
        iterationCounter4 += 7
    } else {
        iterationCounter4 += 7 - inputArray[d].length
    }
}

// Right 1, Down 2
var e: number
var count5: number = 0
var iterationCounter5: number = 0
for (e = 0; e < inputArray.length; e += 2) {
    if (inputArray[e].charAt(iterationCounter5) === '#') {
        count5++
    }
    if (iterationCounter5 + 1 < inputArray[e].length) {
        iterationCounter5 += 1
    } else {
        iterationCounter5 += 1 - inputArray[e].length
    }
}

console.log(count1 * count2 * count3 * count4 * count5)
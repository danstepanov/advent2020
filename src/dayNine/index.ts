// look through array of all values that do not sum and find first instance (should be last number)
// var itemList: string[] = `35
// 20
// 15
// 25
// 47
// 40
// 62
// 55
// 65
// 95
// 102
// 117
// 150
// 182
// 127
// 219
// 299
// 277
// 309
// 576`.split(/\n/g)

import itemList from './input'
    
var numberList: number[] = itemList.map(x => +x)

// create array of all values that do not sum
var doNotSumList: number[] = []

const getLastNumbers = (activeNumberIndex, backNumber) => {
    if (activeNumberIndex <= backNumber) {
        return []
    }
    var activeIndexDiff = numberList.length - activeNumberIndex 
    var allPossibleSumsList: number[] = []
    var lastNumbers: number[] = []
    for (var j = numberList.length - activeIndexDiff - 1; j >= numberList.length - activeIndexDiff - backNumber; j--) {
        // check if active number is in array of sums
        // create array that is all possible sums of 25 values
        lastNumbers.push(numberList[j])
        for (var z = numberList.length - activeIndexDiff - 1; z >= numberList.length - activeIndexDiff - backNumber; z--) {
            if (!(z === j)) {
                allPossibleSumsList.push(numberList[z] + numberList[j])
            }
        
        }
    }

    return allPossibleSumsList
}

// find number that isn't sum of 25 before it
// start with last number as active number
const findNumberThatDoesNotSum = () => {
    for (var i = numberList.length - 1; i >= 0; i--) {
        // create array that is all possible sums of 25 values
        // loop through last 25 values
        // if not a match, add to array of values that do not sum
        const lastNumbers = getLastNumbers(i, 25)
        if (!lastNumbers.includes(numberList[i]) && lastNumbers.length > 0) {
            doNotSumList.push(numberList[i])
        }
    }
    return doNotSumList[0]
}

// Part Two
const invalidNumber: number = findNumberThatDoesNotSum()
// const invalidNumber: number = 127

const findContiguousSum = (invalidNumber, numberList) => {
    for (var i = 0; i < numberList.length; i++) {
        var contiguousNumbers: number[] = []
        contiguousNumbers.push(numberList[i])
        for (var j = i + 1; j < numberList.length; j++) {
            var currentContiguousSum: number = 0
            if (contiguousNumbers.length === 0) {
                currentContiguousSum = 0
            } else if (contiguousNumbers.length === 1) {
                currentContiguousSum = contiguousNumbers[0]
            } else {
                currentContiguousSum = contiguousNumbers.reduce((a, b) => a + b)
            }
            if (numberList[i] + numberList[j] + currentContiguousSum === invalidNumber) {
                contiguousNumbers.shift()
                contiguousNumbers.push(numberList[j])
                return [contiguousNumbers[0], contiguousNumbers[contiguousNumbers.length - 1]]
            } else {
                contiguousNumbers.push(numberList[j])
            }
        }
    }
    
}

console.log(findContiguousSum(invalidNumber, numberList)?.reduce((a,b) => a+b))
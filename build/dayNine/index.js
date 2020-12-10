"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
var numberList = input_1.default.map(function (x) { return +x; });
// create array of all values that do not sum
var doNotSumList = [];
var getLastNumbers = function (activeNumberIndex, backNumber) {
    if (activeNumberIndex <= backNumber) {
        return [];
    }
    var activeIndexDiff = numberList.length - activeNumberIndex;
    var allPossibleSumsList = [];
    var lastNumbers = [];
    for (var j = numberList.length - activeIndexDiff - 1; j >= numberList.length - activeIndexDiff - backNumber; j--) {
        // check if active number is in array of sums
        // create array that is all possible sums of 25 values
        lastNumbers.push(numberList[j]);
        for (var z = numberList.length - activeIndexDiff - 1; z >= numberList.length - activeIndexDiff - backNumber; z--) {
            if (!(z === j)) {
                allPossibleSumsList.push(numberList[z] + numberList[j]);
            }
        }
    }
    return allPossibleSumsList;
};
// find number that isn't sum of 25 before it
// start with last number as active number
var findNumberThatDoesNotSum = function () {
    for (var i = numberList.length - 1; i >= 0; i--) {
        // create array that is all possible sums of 25 values
        // loop through last 25 values
        // if not a match, add to array of values that do not sum
        var lastNumbers = getLastNumbers(i, 25);
        if (!lastNumbers.includes(numberList[i]) && lastNumbers.length > 0) {
            doNotSumList.push(numberList[i]);
        }
    }
    return doNotSumList[0];
};
// Part Two
var invalidNumber = findNumberThatDoesNotSum();
// const invalidNumber: number = 127
// console.log()
var findContiguousSum = function (invalidNumber, numberList) {
    for (var i = 0; i < numberList.length; i++) {
        var contiguousNumbers = [];
        contiguousNumbers.push(numberList[i]);
        for (var j = i + 1; j < numberList.length; j++) {
            var currentContiguousSum = 0;
            if (numberList[j] + currentContiguousSum === invalidNumber) {
                contiguousNumbers.shift();
                contiguousNumbers.push(numberList[j]);
                return [contiguousNumbers[0], contiguousNumbers[contiguousNumbers.length - 1]];
            }
            else {
                contiguousNumbers.push(numberList[j]);
            }
        }
    }
};
console.log((_a = findContiguousSum(invalidNumber, numberList)) === null || _a === void 0 ? void 0 : _a.reduce(function (a, b) { return a + b; }));
// console.log(findContiguousSum(invalidNumber, numberList))

"use strict";
// var itemList = `16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4`.split(/\n/g)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var itemList = `28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3`.split(/\n/g)
var input_1 = __importDefault(require("./input"));
var numberList = input_1.default.map(function (x) { return +x; }).sort(function (a, b) { return a - b; });
console.log(numberList);
numberList.push(numberList[numberList.length - 1] + 3);
var firstThree = [numberList[0], numberList[1], numberList[2]];
var joltsOfOne = firstThree[0] === 1 ? 1 : 0;
var joltsOfTwo = firstThree[0] === 2 ? 1 : 0;
var joltsOfThree = firstThree[0] === 3 ? 1 : 0;
// Part 1
for (var i = 0; i < numberList.length; i++) {
    var nextThreeAdapters = [numberList[i + 1], numberList[i + 2], numberList[i + 2]];
    if (numberList[i] + 1 === nextThreeAdapters[0] || numberList[i] + 1 === nextThreeAdapters[1] || numberList[i] + 1 === nextThreeAdapters[2]) {
        joltsOfOne++;
    }
    else if (numberList[i] + 2 === nextThreeAdapters[0] || numberList[i] + 2 === nextThreeAdapters[1] || numberList[i] + 2 === nextThreeAdapters[2]) {
        joltsOfTwo++;
    }
    else if (numberList[i] + 3 === nextThreeAdapters[0] || numberList[i] + 3 === nextThreeAdapters[1] || numberList[i] + 3 === nextThreeAdapters[2]) {
        joltsOfThree++;
    }
}
// Part 2
var totalNumberOfDistinctPath = function (numberList) {
    var _a, _b, _c;
    var totalPaths = [{ number: 0, paths: 1 }];
    for (var i = 0; i < numberList.length; i++) {
        var previousOne = ((_a = totalPaths.find(function (item) { return item.number === numberList[i] - 1; })) === null || _a === void 0 ? void 0 : _a.paths) || 0;
        var previousTwo = ((_b = totalPaths.find(function (item) { return item.number === numberList[i] - 2; })) === null || _b === void 0 ? void 0 : _b.paths) || 0;
        var previousThree = ((_c = totalPaths.find(function (item) { return item.number === numberList[i] - 3; })) === null || _c === void 0 ? void 0 : _c.paths) || 0;
        var pathSum = previousOne + previousTwo + previousThree;
        totalPaths.push({ number: numberList[i], paths: pathSum });
    }
    return totalPaths;
};
console.dir(totalNumberOfDistinctPath(numberList), { 'maxArrayLength': null });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
// Part One
// Right 3, Down 1
var j;
var count = 0;
var iterationCounter = 0;
for (j = 0; j < input_1.default.length; j++) {
    if (input_1.default[j].charAt(iterationCounter) === '#') {
        count++;
    }
    if (iterationCounter + 3 < input_1.default[j].length) {
        iterationCounter += 3;
    }
    else {
        iterationCounter += 3 - input_1.default[j].length;
    }
}
console.log(count);
// Part Two
// Right 1, Down 1
var a;
var count1 = 0;
var iterationCounter1 = 0;
for (a = 0; a < input_1.default.length; a++) {
    if (input_1.default[a].charAt(iterationCounter1) === '#') {
        count1++;
    }
    if (iterationCounter1 + 1 < input_1.default[a].length) {
        iterationCounter1 += 1;
    }
    else {
        iterationCounter1 += 1 - input_1.default[a].length;
    }
}
// Right 3, Down 1
var b;
var count2 = 0;
var iterationCounter2 = 0;
for (b = 0; b < input_1.default.length; b++) {
    if (input_1.default[b].charAt(iterationCounter2) === '#') {
        count2++;
    }
    if (iterationCounter2 + 3 < input_1.default[b].length) {
        iterationCounter2 += 3;
    }
    else {
        iterationCounter2 += 3 - input_1.default[b].length;
    }
}
// Right 5, Down 1
var c;
var count3 = 0;
var iterationCounter3 = 0;
for (c = 0; c < input_1.default.length; c++) {
    if (input_1.default[c].charAt(iterationCounter3) === '#') {
        count3++;
    }
    if (iterationCounter3 + 5 < input_1.default[c].length) {
        iterationCounter3 += 5;
    }
    else {
        iterationCounter3 += 5 - input_1.default[c].length;
    }
}
// Right 7, Down 1
var d;
var count4 = 0;
var iterationCounter4 = 0;
for (d = 0; d < input_1.default.length; d++) {
    if (input_1.default[d].charAt(iterationCounter4) === '#') {
        count4++;
    }
    if (iterationCounter4 + 7 < input_1.default[d].length) {
        iterationCounter4 += 7;
    }
    else {
        iterationCounter4 += 7 - input_1.default[d].length;
    }
}
// Right 1, Down 2
var e;
var count5 = 0;
var iterationCounter5 = 0;
for (e = 0; e < input_1.default.length; e += 2) {
    if (input_1.default[e].charAt(iterationCounter5) === '#') {
        count5++;
    }
    if (iterationCounter5 + 1 < input_1.default[e].length) {
        iterationCounter5 += 1;
    }
    else {
        iterationCounter5 += 1 - input_1.default[e].length;
    }
}
console.log(count1 * count2 * count3 * count4 * count5);

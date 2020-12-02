"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
// var passwordSets: passwordSet[] | [] = [{ min: 8, max: 9, char: "n", password: "nnynnnnnn" }, { min: 8, max: 8, char: "n", password: "nnnnnnnnn" }]
var passwordSets = input_1.default;
// var passwordSets: passwordSet[] = [{ min: 1, max: 3, char: "a", password: "abcde" }, { min: 1, max: 3, char: "b", password: "cdefg" }, { min: 2, max: 9, char: "c", password: "ccccccccc" }]
// var passwordSets: passwordSet[] = [{ min: 1, max: 3, char: "a", password: "abcde" }]
console.log('Original: ', passwordSets.length);
var results = passwordSets.filter(function (passwordSet) {
    // Part One
    // const characterCount = passwordSet.password.split(passwordSet.char).length - 1
    // return characterCount >= passwordSet.min && characterCount <= passwordSet.max
    // console.log('Min char: ', passwordSet.password[passwordSet.min - 1])
    // console.log('Max char: ', passwordSet.password[passwordSet.max - 1])
    // console.log('Char: ', passwordSet.char)
    // console.log('Min: ', passwordSet.min)
    // console.log('Max: ', passwordSet.max)
    // console.log('Calculated Min: ', passwordSet.min - 1)
    // console.log('Calculated Max: ', passwordSet.max - 1)
    // console.log('Min: ', passwordSet.password[passwordSet.min - 1] === passwordSet.char)
    // console.log('Max: ', passwordSet.password[passwordSet.max - 1] === passwordSet.char)
    // Part Two
    if (passwordSet.password[passwordSet.min - 1] === passwordSet.char && passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        // console.log('Remove 1: ', passwordSet)
        return false;
    }
    else if (passwordSet.password[passwordSet.min - 1] === passwordSet.char || passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        // console.log('Keep: ', passwordSet)
        return true;
    }
    else {
        // console.log('Remove 2: ', passwordSet)
        return false;
    }
});
console.log('New: ', results.length);

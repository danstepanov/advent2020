"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
var passwordSets = input_1.default;
var results = passwordSets.filter(function (passwordSet) {
    // Part One
    var characterCount = passwordSet.password.split(passwordSet.char).length - 1;
    return characterCount >= passwordSet.min && characterCount <= passwordSet.max;
    // Part Two
    if (passwordSet.password[passwordSet.min - 1] === passwordSet.char && passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        return false;
    }
    else if (passwordSet.password[passwordSet.min - 1] === passwordSet.char || passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        return true;
    }
    else {
        return false;
    }
});
console.log('New: ', results.length);

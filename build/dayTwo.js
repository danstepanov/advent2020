"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
// var passwordSets: passwordSet[] | [] = [{ min: 8, max: 9, char: "n", password: "nnynnnnnn" }, { min: 8, max: 8, char: "n", password: "nnnnnnnnn" }]
var passwordSets = input_1.default;
console.log('Original: ', passwordSets.length);
var results = passwordSets.filter(function (passwordSet) {
    var characterCount = passwordSet.password.split(passwordSet.char).length - 1;
    return characterCount >= passwordSet.min && characterCount <= passwordSet.max;
});
console.log('New: ', results.length);

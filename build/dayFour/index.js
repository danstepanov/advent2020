"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
var newArray = input_1.default.map(function (passport) {
    var newOne = passport.replace(/ /g, "', '").replace(/:/g, "':'");
    newOne = "{ '" + newOne + "' }";
    newOne = newOne.replace(/'/g, '"');
    var obj = JSON.parse(newOne);
    return obj;
});
var count = 0;
var otherCount = 0;
newArray.forEach(function (passport) {
    // Missing Value Check
    if (passport['byr'] === undefined || passport['iyr'] === undefined || passport['eyr'] === undefined || passport['hgt'] === undefined || passport['hcl'] === undefined || passport['ecl'] === undefined || passport['pid'] === undefined) {
        return;
    }
    // Birth Year
    if (passport['byr'].length !== 4 || passport['byr'] < 1920 || passport['byr'] > 2002) {
        return;
    }
    // Issue Year
    if (passport['iyr'].length !== 4 || passport['iyr'] < 2010 || passport['iyr'] > 2020) {
        return;
    }
    // Exp Year
    if (passport['eyr'].length !== 4 || passport['eyr'] < 2020 || passport['eyr'] > 2030) {
        return;
    }
    // Height
    var last2hgt = passport['hgt'].slice(-2);
    if (last2hgt !== 'cm' && last2hgt !== 'in') {
        return;
    }
    if (last2hgt === 'cm') {
        if (passport['hgt'].match(/\d+/)[0] < 150 || passport['hgt'].match(/\d+/)[0] > 193) {
            return;
        }
    }
    else if (last2hgt === 'in') {
        if (passport['hgt'].match(/\d+/)[0] < 59 || passport['hgt'].match(/\d+/)[0] > 76) {
            return;
        }
    }
    // Hair Color
    var colorCheck = /[a-f0-9]{6}/;
    if (passport['hcl'].charAt(0) !== '#' || passport['hcl'].slice(1).length !== 6 || !colorCheck.test(passport['hcl'].slice(1))) {
        return;
    }
    console.log(passport['hcl']);
    // Eye Color
    if (passport['ecl'] !== 'amb' && passport['ecl'] !== 'blu' && passport['ecl'] !== 'brn' && passport['ecl'] !== 'gry' && passport['ecl'] !== 'grn' && passport['ecl'] !== 'hzl' && passport['ecl'] !== 'oth') {
        return;
    }
    // Passport Id
    var numberCheck = /[0-9]{9}/;
    if (passport['pid'].length !== 9 || !numberCheck.test(passport['pid'])) {
        return;
    }
    count++;
});
console.log(newArray.length);
console.log(count);

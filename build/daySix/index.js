"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
// loop through group
// var uniqueAnswers = groups.map(group => {
//     var uniqueCharacters: string[] = []
//     group.map(answer => {
//         // create array for each string
//         const characters = answer.split('')
//         // check if character exists in memory, add if no
//         characters.map(character => {
//             if (!uniqueCharacters.includes(character)) {
//                 uniqueCharacters.push(character)
//             }
//             return
//         })
//     })
//     return uniqueCharacters.length
// })
var sampleStringArray1 = input_1.default.split(/\n\s*\n/).map(function (string) { return string.replace(/\n/g, ",").split(','); });
var sampleStringArray2 = input_1.default.split(/\n\s*\n/).map(function (string) { return string.replace(/\n/g, ""); });
var numberOfGroups = sampleStringArray1.map(function (group) {
    return group.length;
});
var validArray = [];
var validCount = 0;
sampleStringArray2.map(function (stringGroup, index) {
    var characterCount = 0;
    var stringArray = stringGroup.split('');
    var validArrayItem = [];
    var characterCountArray = [];
    // get number of times character appears in string group
    for (var i = 0; i < stringArray.length; i++) {
        for (var j = 0; j < stringArray.length; j++) {
            if (stringArray[j] === stringArray[i]) {
                characterCount++;
            }
        }
        characterCountArray.push({ character: stringArray[i], occurences: characterCount });
        characterCount = 0;
    }
    characterCountArray = characterCountArray.filter(function (item, index, self) {
        return index === self.findIndex(function (t) { return (t.character === item.character && t.occurences === item.occurences); });
    });
    characterCountArray.forEach(function (characterCount) {
        if (characterCount.occurences === numberOfGroups[index]) {
            validCount++;
        }
    });
    validArray.push(characterCountArray);
});
for (var z = 0; z < numberOfGroups.length; z++) {
    for (var y = 0; y < validArray.length; y++) {
        if (validArray[y].occurences === numberOfGroups[z]) {
            validCount++;
        }
    }
}
console.log(validCount);
// console.log(validArray.reduce((a,b) => a + b, 0))
// console.log(uniqueAnswers.reduce((a,b) => a + b, 0))

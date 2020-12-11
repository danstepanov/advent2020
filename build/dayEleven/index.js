"use strict";
var seatMapArray = function (seatMap) {
    var seatArray = [];
    for (var i = 0; i < seatMap.length; i++) {
        var row = [];
        for (var j = 0; j < seatMap.length; j++) {
            row.push(seatMap[i][j]);
        }
        seatArray.push(row);
    }
    return seatArray;
};
var firstSeatMap = "L.LL.LL.LL\nLLLLLLL.LL\nL.L.L..L..\nLLLL.LL.LL\nL.LL.LL.LL\nL.LLLLL.LL\n..L.L.....\nLLLLLLLLLL\nL.LLLLLL.L\nL.LLLLL.LL".split(/\n/g);
var firstSeatMapArray = seatMapArray(firstSeatMap);
var secondSeatMap = seatMapArray("#.##.##.##\n#######.##\n#.#.#..#..\n####.##.##\n#.##.##.##\n#.#####.##\n..#.#.....\n##########\n#.######.#\n#.#####.##".split(/\n/g));
var secondSeatMapArray = seatMapArray(secondSeatMap);
var thirdSeatMap = seatMapArray("#.LL.L#.##\n#LLLLLL.L#\nL.L.L..L..\n#LLL.LL.L#\n#.LL.LL.LL\n#.LLLL#.##\n..L.L.....\n#LLLLLLLL#\n#.LLLLLL.L\n#.#LLLL.##".split(/\n/g));
var thirdSeatMapArray = seatMapArray(thirdSeatMap);
var fourthSeatMap = seatMapArray("#.##.L#.##\n#L###LL.L#\nL.#.#..#..\n#L##.##.L#\n#.##.LL.LL\n#.###L#.##\n..#.#.....\n#L######L#\n#.LL###L.L\n#.#L###.##".split(/\n/g));
var fourthSeatMapArray = seatMapArray(fourthSeatMap);
var fifthSeatMap = seatMapArray("#.#L.L#.##\n#LLL#LL.L#\nL.L.L..#..\n#LLL.##.L#\n#.LL.LL.LL\n#.LL#L#.##\n..L.L.....\n#L#LLLL#L#\n#.LLLLLL.L\n#.#L#L#.##".split(/\n/g));
var fifthSeatMapArray = seatMapArray(fifthSeatMap);
var sixthSeatMap = seatMapArray("#.#L.L#.##\n#LLL#LL.L#\nL.#.L..#..\n#L##.##.L#\n#.#L.LL.LL\n#.#L#L#.##\n..L.L.....\n#L#L##L#L#\n#.LLLLLL.L\n#.#L#L#.##".split(/\n/g));
var sixthSeatMapArray = seatMapArray(sixthSeatMap);
// console.log('Original: ', seatMapArray(seatMap))
var roundPass = function (seatMap) {
    // console.log('Original: ', seatMap)
    var newSeatMap = [];
    for (var row = 0; row < seatMap.length; row++) {
        var arrayRow = [];
        for (var column = 0; column < seatMap.length; column++) {
            var adjacentOccupiedSeats = 0;
            // check above
            if (seatMap[row - 1]) {
                if (seatMap[row - 1][column] === '#') {
                    // if (row === 0 && column === 9) console.log('above')
                    adjacentOccupiedSeats++;
                }
            }
            // check below
            if (seatMap[row + 1]) {
                if (seatMap[row + 1][column] === '#') {
                    // if (row === 0 && column === 9) console.log('below')
                    adjacentOccupiedSeats++;
                }
            }
            if (seatMap[row][column - 1]) {
                // check left
                if (seatMap[row][column - 1] === '#') {
                    // if (row === 0 && column === 9 ) console.log('left: ', seatMap[row])
                    adjacentOccupiedSeats++;
                }
                // check upper left
                if (seatMap[row - 1]) {
                    if (seatMap[row - 1][column - 1] === '#') {
                        // if (row === 0 && column === 9) console.log('upper left')
                        adjacentOccupiedSeats++;
                    }
                }
                // check lower left
                if (seatMap[row + 1]) {
                    if (seatMap[row + 1][column - 1] === '#') {
                        // if (row === 0 && column === 9) console.log('lower left')
                        adjacentOccupiedSeats++;
                    }
                }
            }
            if (seatMap[row][column + 1]) {
                // check right
                if (seatMap[row][column + 1] === '#') {
                    // if (row === 0 && column === 9 ) console.log('right')
                    adjacentOccupiedSeats++;
                }
                // check upper right
                if (seatMap[row - 1]) {
                    if (seatMap[row - 1][column + 1] === '#') {
                        // if (row === 0 && column === 9 ) console.log('upper right')
                        adjacentOccupiedSeats++;
                    }
                }
                // check lower right
                if (seatMap[row + 1]) {
                    if (seatMap[row + 1][column + 1] === '#') {
                        // if (row === 0 && column === 9) console.log('lower right')
                        adjacentOccupiedSeats++;
                    }
                }
            }
            if (seatMap[row][column] === 'L' && adjacentOccupiedSeats === 0) {
                arrayRow.push('#');
            }
            else if (seatMap[row][column] === '#' && adjacentOccupiedSeats > 3) {
                arrayRow.push('L');
            }
            else {
                arrayRow.push(seatMap[row][column]);
            }
        }
        newSeatMap.push(arrayRow);
    }
    return newSeatMap;
};
var newSecondMap = roundPass(firstSeatMapArray);
var newThirdMap = roundPass(secondSeatMapArray);
var newFourthMap = roundPass(thirdSeatMapArray);
var newFifthMap = roundPass(fourthSeatMapArray);
var newSixthMap = roundPass(fifthSeatMapArray);
var newSeventhMap = roundPass(sixthSeatMapArray);
var isEqual = function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    else {
        for (var i = 0; i < firstArray.length; i++) {
            for (var j = 0; j < firstArray.length; j++) {
                if (firstArray[i][j] === secondArray[i][j]) {
                    return true;
                }
                return false;
            }
        }
    }
    return false;
};
var arrayEquals = function (a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function (val, index) { return val === b[index]; });
};
// console.log(isEqual(secondSeatMapArray, newSecondMap))
// console.log(isEqual(thirdSeatMapArray, newThirdMap))
// console.log(isEqual(fourthSeatMapArray, newFourthMap))
// console.log(isEqual(fifthSeatMapArray, newFifthMap))
// console.log(isEqual(sixthSeatMapArray, newSixthMap))
// console.log(isEqual(sixthSeatMapArray, newSeventhMap))
// console.log(newSeventhMap)
var hashCount = function (seatMap) {
    var count = 0;
    for (var j = 0; j < seatMap.length; j++) {
        for (var i = 0; i < seatMap[j].length; i++) {
            if (seatMap[j][i] === '#')
                count++;
        }
    }
    return count;
};
var numberOfSeats = function (seatMap) {
    var newSeatMap = roundPass(seatMap);
    if (arrayEquals(seatMap, newSeatMap)) {
        console.log('Here: ', newSeatMap);
        console.log(hashCount(seatMap));
        return;
    }
    numberOfSeats(newSeatMap);
};
console.log(numberOfSeats(firstSeatMapArray));

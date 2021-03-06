"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
var createSeatMapArray = function (seatMap) {
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
var seatMapArray = createSeatMapArray(input_1.default);
// const firstSeatMap = `L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL`.split(/\n/g)
// const firstSeatMapArray = seatMapArray(firstSeatMap)
// const secondSeatMap: string[][] = seatMapArray(`#.##.##.##
// #######.##
// #.#.#..#..
// ####.##.##
// #.##.##.##
// #.#####.##
// ..#.#.....
// ##########
// #.######.#
// #.#####.##`.split(/\n/g))
// const secondSeatMapArray = seatMapArray(secondSeatMap)
// const thirdSeatMap: string[][] = seatMapArray(`#.LL.L#.##
// #LLLLLL.L#
// L.L.L..L..
// #LLL.LL.L#
// #.LL.LL.LL
// #.LLLL#.##
// ..L.L.....
// #LLLLLLLL#
// #.LLLLLL.L
// #.#LLLL.##`.split(/\n/g))
// const thirdSeatMapArray = seatMapArray(thirdSeatMap)
// const fourthSeatMap: string[][] = seatMapArray(`#.##.L#.##
// #L###LL.L#
// L.#.#..#..
// #L##.##.L#
// #.##.LL.LL
// #.###L#.##
// ..#.#.....
// #L######L#
// #.LL###L.L
// #.#L###.##`.split(/\n/g))
// const fourthSeatMapArray = seatMapArray(fourthSeatMap)
// const fifthSeatMap: string[][] = seatMapArray(`#.#L.L#.##
// #LLL#LL.L#
// L.L.L..#..
// #LLL.##.L#
// #.LL.LL.LL
// #.LL#L#.##
// ..L.L.....
// #L#LLLL#L#
// #.LLLLLL.L
// #.#L#L#.##`.split(/\n/g))
// const fifthSeatMapArray = seatMapArray(fifthSeatMap)
// const sixthSeatMap: string[][] = seatMapArray(`#.#L.L#.##
// #LLL#LL.L#
// L.#.L..#..
// #L##.##.L#
// #.#L.LL.LL
// #.#L#L#.##
// ..L.L.....
// #L#L##L#L#
// #.LLLLLL.L
// #.#L#L#.##`.split(/\n/g))
// const sixthSeatMapArray = seatMapArray(sixthSeatMap)
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
// const newSecondMap = roundPass(firstSeatMapArray)
// const newThirdMap = roundPass(secondSeatMapArray)
// const newFourthMap = roundPass(thirdSeatMapArray)
// const newFifthMap = roundPass(fourthSeatMapArray)
// const newSixthMap = roundPass(fifthSeatMapArray)
// const newSeventhMap = roundPass(sixthSeatMapArray)
var isEqual = function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    else {
        for (var i = 0; i < firstArray.length; i++) {
            for (var j = 0; j < firstArray.length; j++) {
                if (firstArray[i][j] !== secondArray[i][j]) {
                    return false;
                }
            }
        }
    }
    return true;
};
var hashCount = function (seatMap) {
    var count = 0;
    for (var j_1 = 0; j_1 < seatMap.length; j_1++) {
        for (var i_1 = 0; i_1 < seatMap[j_1].length; i_1++) {
            if (seatMap[j_1][i_1] === '#')
                count++;
        }
    }
    return count;
};
var count = 0;
var numberOfSeats = function (seatMap) {
    count++;
    console.log("Original Seats " + count + ": ", hashCount(seatMap));
    var newSeatMap = roundPass(seatMap);
    if (isEqual(seatMap, newSeatMap)) {
        return hashCount(newSeatMap);
    }
    console.log("New Seats " + count + ": ", hashCount(newSeatMap));
    return numberOfSeats(newSeatMap);
};
console.log(numberOfSeats(seatMapArray));

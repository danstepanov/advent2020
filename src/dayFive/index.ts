import boardingPasses from './input'

var highestSeatID = 0
var i: number 
var highestSeatID: number = 0
var seatIDArray: number[] = []
var row: number = 0
var column: number = 0
for (i = 0; i < boardingPasses.length; i++) {
    const array = boardingPasses[i].split('')
    var rowRange = [0, 127]
    var columnRange = [0, 7]
    var j: number
    var k: number
    var string = ["F", "B", "F", "BBFFRRL"]
    
    // Determine Row
    for (j = 0; j < 7; j++) {
        if (array[j] === 'F') {
            var rowRangeDiff = (rowRange[1] - rowRange[0] + 1)
            rowRange[1] -= rowRangeDiff/2
        } else if (array[j] === 'B') {
            var rowRangeDiff = (rowRange[1] - rowRange[0] + 1)
            rowRange[0] += rowRangeDiff/2
        }
        row = rowRange[1]
    }

    // Determine Column
    for (k = 7; k < 10; k++) {
        if (array[k] === 'L') {
            var columnRangeDiff = (columnRange[1] - columnRange[0] + 1)
            columnRange[1] -= columnRangeDiff/2
        } else if (array[j] === 'R') {
            var columnRangeDiff = (columnRange[1] - columnRange[0] + 1)
            columnRange[0] += columnRangeDiff/2
        }
        column = columnRange[1]
        
    }

    // Determine Seat ID
    const seatID = row * 8 + column
    seatIDArray.push(seatID)

    // Find Highest Seat ID
    if (seatID > highestSeatID) {
        highestSeatID = seatID
        console.log(seatID)
        console.log(boardingPasses[i])
    }      
}
console.log('High Score: ', highestSeatID)

// Part Two
seatIDArray.sort((a, b) => a - b)
console.dir(seatIDArray, {'maxArrayLength': null});
var counter: number = 13
for (var l = 0; l < seatIDArray.length; l++) {
    if (seatIDArray[l] !== counter) {
        if (seatIDArray[l - 1] === seatIDArray[l] || seatIDArray[l + 1] === seatIDArray[l]) {
            counter++
        } else {
            console.log(counter)
            break
        }
    } else {
        counter++
    }
}
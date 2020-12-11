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

import itemList from './input'
var numberList: number[] = itemList.map(x => +x).sort((a, b) => a - b)
console.log(numberList)
numberList.push(numberList[numberList.length - 1] + 3)
const firstThree = [numberList[0], numberList[1], numberList[2]]
var joltsOfOne: number = firstThree[0] === 1 ? 1 : 0
var joltsOfTwo: number = firstThree[0] === 2 ? 1 : 0
var joltsOfThree: number = firstThree[0] === 3 ? 1 : 0
// Part 1
for (var i = 0; i < numberList.length; i++) {
    var nextThreeAdapters: number[] = [numberList[i + 1], numberList[i + 2], numberList[i + 2]]
    
    if (numberList[i] + 1 === nextThreeAdapters[0] || numberList[i] + 1 === nextThreeAdapters[1] || numberList[i] + 1 === nextThreeAdapters[2]) {
        joltsOfOne++
    } else if (numberList[i] + 2 === nextThreeAdapters[0] || numberList[i] + 2 === nextThreeAdapters[1] || numberList[i] + 2 === nextThreeAdapters[2]) {
        joltsOfTwo++
    } else if (numberList[i] + 3 === nextThreeAdapters[0] || numberList[i] + 3 === nextThreeAdapters[1] || numberList[i] + 3 === nextThreeAdapters[2]) {
        joltsOfThree++
    }
}

// console.log(joltsOfOne * joltsOfThree)

interface numberPath {
    number: number
    paths: number
}

// Part 2
const totalNumberOfDistinctPath = (numberList: number[]): numberPath[] => {
    var totalPaths: numberPath[] = [{number:0, paths: 1}]
    for (var i: number = 0; i < numberList.length; i++) {
        const previousOne = totalPaths.find(item => item.number === numberList[i] - 1)?.paths || 0
        const previousTwo = totalPaths.find(item => item.number === numberList[i] - 2)?.paths || 0
        const previousThree = totalPaths.find(item => item.number === numberList[i] - 3)?.paths || 0
        const pathSum = previousOne + previousTwo + previousThree
        totalPaths.push({number: numberList[i], paths: pathSum})
    }

    return totalPaths
}

console.dir(totalNumberOfDistinctPath(numberList), {'maxArrayLength': null})
const dayFifteen = (): number => {
    var lastOccurences: {[value:number]: {turn: number, previous: number}} = { 0: { "turn": 1, "previous": 0 }, 3: { "turn": 2, "previous": 0 }, 6: { "turn": 3, "previous": 0 } }
    let lastValue: number = 6
    // var lastOccurence: turnValue[] = [{ "turn": 1, "value": 12 }, { "turn": 2, "value": 20 }, { "turn": 3, "value": 0 }, { "turn": 4, "value": 6 }, { "turn": 5, "value": 1 }, { "turn": 6, "value": 17 }, { "turn": 7, "value": 7 }]
    for (var i: number = 4; i < 2021; i++) {
        let lastOccurence = lastOccurences[lastValue]
        // rule 1: If that was the first time the number has been spoken, the current player says 0.
        if (lastOccurence.previous === 0) {
            // console.log(`Current Turn: ${currentTurn}, ${lastValue} is unique.`)
            // Add new item turn to last occurance
            lastOccurence = { "turn": i, "previous": lastOccurence.turn }
            lastValue = 0
        }
        // rule 2
        else {
            // console.log(`Current Turn: ${currentTurn}, ${lastValue} is not unique. Last occurence was turn ${lastOccurence.find(item => item.value === lastValue)?.turn} and turn ${lastOccurence.find(item => item.value === lastValue)?.previous} before that.`)
            let subtractedValue = lastOccurence.turn - lastOccurence.previous

            // Update last occurance
            lastOccurences[subtractedValue] = {"turn": i, "previous": lastOccurence.turn }
            lastValue = subtractedValue
        }
    }
    console.log(lastOccurences)
    return lastValue
}

console.log(dayFifteen())
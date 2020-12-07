import groups from './input'
import stringGroups from './input2'
var sampleStringArray1 = groups.split(/\n\s*\n/).map(string => string.replace(/\n/g, ",").split(','))
// loop through group
var uniqueAnswers = sampleStringArray1.map(group => {
    var uniqueCharacters: string[] = []
    group.map(answer => {
        // create array for each string
        const characters = answer.split('')
        
        // check if character exists in memory, add if no
        characters.map(character => {
            if (!uniqueCharacters.includes(character)) {
                uniqueCharacters.push(character)
            }
            return
        })
    })

    return uniqueCharacters.length
})

var sampleStringArray2 = groups.split(/\n\s*\n/).map(string => string.replace(/\n/g, ""))

var numberOfGroups = sampleStringArray1.map(group => {
    return group.length
})

interface characterCount {
    character: string
    occurences: number
}
var validArray: any[] = []
var validCount: number = 0
sampleStringArray2.map((stringGroup, index) => {
    var characterCount: number = 0
    const stringArray = stringGroup.split('')
    var validArrayItem: string[] = []
    var characterCountArray: characterCount[] = []

    // get number of times character appears in string group
    for (var i = 0; i < stringArray.length; i++) {
        for (var j = 0; j < stringArray.length; j++) {
            if (stringArray[j] === stringArray[i]) {
                characterCount++
            }
        }

        characterCountArray.push({ character: stringArray[i], occurences: characterCount })
        characterCount = 0
    }

    characterCountArray = characterCountArray.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.character === item.character && t.occurences === item.occurences
        ))
    )

    characterCountArray.forEach(characterCount => {
        if (characterCount.occurences === numberOfGroups[index]) {
            validCount++
        }
    })
    validArray.push(characterCountArray)
})

for (var z = 0; z < numberOfGroups.length; z++) {
    for (var y = 0; y < validArray.length; y++) {
        if (validArray[y].occurences === numberOfGroups[z]) {
            validCount ++
        }
    }
}

console.log(validCount)

// console.log(uniqueAnswers.reduce((a,b) => a + b, 0))

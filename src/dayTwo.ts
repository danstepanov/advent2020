import input from './input'

interface passwordSet {
    min: number
    max: number
    char: string
    password: string
}

// var passwordSets: passwordSet[] | [] = [{ min: 8, max: 9, char: "n", password: "nnynnnnnn" }, { min: 8, max: 8, char: "n", password: "nnnnnnnnn" }]
var passwordSets: passwordSet[] = input
console.log('Original: ', passwordSets.length)
const results = passwordSets.filter(passwordSet => {
    const characterCount = passwordSet.password.split(passwordSet.char).length - 1
    return characterCount >= passwordSet.min && characterCount <= passwordSet.max
})

console.log('New: ', results.length)

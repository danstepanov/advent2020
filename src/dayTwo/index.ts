import input from './input'

interface passwordSet {
    min: number
    max: number
    char: string
    password: string
}

var passwordSets: passwordSet[] = input
const results = passwordSets.filter(passwordSet => {
    // Part One
    const characterCount = passwordSet.password.split(passwordSet.char).length - 1
    return characterCount >= passwordSet.min && characterCount <= passwordSet.max

    // Part Two
    if (passwordSet.password[passwordSet.min - 1] === passwordSet.char && passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        return false
    } else if (passwordSet.password[passwordSet.min - 1] === passwordSet.char || passwordSet.password[passwordSet.max - 1] === passwordSet.char) {
        return true
    } else {
        return false
    }
})

console.log('New: ', results.length)

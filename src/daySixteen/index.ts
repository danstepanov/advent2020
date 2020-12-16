import nearbyTickets from "./input"

// var properties: string = `{class: 1-3 or 5-7
// row: 6-11 or 33-44
// seat: 13-40 or 45-50}`

var properties: string = `{departure location: 27-840 or 860-957
    departure station: 28-176 or 183-949
    departure platform: 44-270 or 277-967
    departure track: 33-197 or 203-957
    departure date: 47-660 or 677-955
    departure time: 45-744 or 758-971
    arrival location: 42-636 or 642-962
    arrival station: 44-243 or 252-962
    arrival platform: 46-428 or 449-949
    arrival track: 25-862 or 876-951
    class: 26-579 or 585-963
    duration: 38-683 or 701-949
    price: 41-453 or 460-970
    route: 48-279 or 292-963
    row: 33-617 or 637-955
    seat: 39-328 or 351-970
    train: 35-251 or 264-957
    type: 25-380 or 389-951
    wagon: 42-461 or 480-965
    zone: 33-768 or 789-954}`

properties = JSON.parse(properties.replace(/{/g, "{ '").replace(/: /g, "' : '").replace(/}/g, "' }").replace(/\n/g, "', '").replace(/'/g, '"'))
Object.keys(properties).forEach(key => {
    const value = properties[key]
    properties[key] = value.replace(" or ", "-").split('-').map(x=>+x)
})

// your ticket:
// let yourTicket: number[] = `7,1,14`.split(',').map(x=>+x)
let yourTicket: number[] = `83,53,73,139,127,131,97,113,61,101,107,67,79,137,89,109,103,59,149,71`.split(',').map(x => +x)

// nearby tickets:
// var nearbyTickets: string[] = `7,3,47
// 40,4,50
// 55,2,20
// 38,6,12`.split(/\n/g)
var nearbyTicketsArray: number[][] = []
nearbyTickets.map(ticket => {
    nearbyTicketsArray.push(ticket.split(",").map(x=>+x))
})


const invalidTicketsForTickets = (tickets: number[][]): number => {
    var finalNumbers: number[] = []
    tickets.forEach((ticket: number[]) => {
        ticket.forEach((number: number) => {
            var count: number = 0
            Object.keys(properties).forEach(key => {
                const value: number[] = properties[key]
                console.log(`number: ${number}`)
                console.log(`low first: ${value[0]}`)
                console.log(`high first: ${value[1]}`)
                console.log(`low second: ${value[2]}`)
                console.log(`high second: ${value[3]}`)
                if (number >= value[0] && number <= value[1]) {
                    count++
                    return
                } else if (number >= value[2] && number <= value[3]) {
                    count++
                    console.log('second')
                    return
                }
            })
            if (count === 0) {
                finalNumbers.push(number)
            }
        })
    })
    console.log(finalNumbers)
    if (finalNumbers.length === 0) {
        return 0
    }
    return finalNumbers.reduce((a,b) => a+b)
}

console.log(invalidTicketsForTickets(nearbyTicketsArray))
// console.log(invalidTicketsForTickets([yourTicket]))
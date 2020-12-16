"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("./input"));
// var properties: string = `{class: 1-3 or 5-7
// row: 6-11 or 33-44
// seat: 13-40 or 45-50}`
var properties = "{departure location: 27-840 or 860-957\n    departure station: 28-176 or 183-949\n    departure platform: 44-270 or 277-967\n    departure track: 33-197 or 203-957\n    departure date: 47-660 or 677-955\n    departure time: 45-744 or 758-971\n    arrival location: 42-636 or 642-962\n    arrival station: 44-243 or 252-962\n    arrival platform: 46-428 or 449-949\n    arrival track: 25-862 or 876-951\n    class: 26-579 or 585-963\n    duration: 38-683 or 701-949\n    price: 41-453 or 460-970\n    route: 48-279 or 292-963\n    row: 33-617 or 637-955\n    seat: 39-328 or 351-970\n    train: 35-251 or 264-957\n    type: 25-380 or 389-951\n    wagon: 42-461 or 480-965\n    zone: 33-768 or 789-954}";
properties = JSON.parse(properties.replace(/{/g, "{ '").replace(/: /g, "' : '").replace(/}/g, "' }").replace(/\n/g, "', '").replace(/'/g, '"'));
Object.keys(properties).forEach(function (key) {
    var value = properties[key];
    properties[key] = value.replace(" or ", "-").split('-').map(function (x) { return +x; });
});
// your ticket:
// let yourTicket: number[] = `7,1,14`.split(',').map(x=>+x)
var yourTicket = "83,53,73,139,127,131,97,113,61,101,107,67,79,137,89,109,103,59,149,71".split(',').map(function (x) { return +x; });
// nearby tickets:
// var nearbyTickets: string[] = `7,3,47
// 40,4,50
// 55,2,20
// 38,6,12`.split(/\n/g)
var nearbyTicketsArray = [];
input_1.default.map(function (ticket) {
    nearbyTicketsArray.push(ticket.split(",").map(function (x) { return +x; }));
});
var invalidTicketsForTickets = function (tickets) {
    var finalNumbers = [];
    tickets.forEach(function (ticket) {
        ticket.forEach(function (number) {
            var count = 0;
            Object.keys(properties).forEach(function (key) {
                var value = properties[key];
                console.log("number: " + number);
                console.log("low first: " + value[0]);
                console.log("high first: " + value[1]);
                console.log("low second: " + value[2]);
                console.log("high second: " + value[3]);
                if (number >= value[0] && number <= value[1]) {
                    count++;
                    return;
                }
                else if (number >= value[2] && number <= value[3]) {
                    count++;
                    console.log('second');
                    return;
                }
            });
            if (count === 0) {
                finalNumbers.push(number);
            }
        });
    });
    console.log(finalNumbers);
    if (finalNumbers.length === 0) {
        return 0;
    }
    return finalNumbers.reduce(function (a, b) { return a + b; });
};
console.log(invalidTicketsForTickets(nearbyTicketsArray));
// console.log(invalidTicketsForTickets([yourTicket]))

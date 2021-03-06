"use strict";
// import itemList from './input'
var itemList = "light red bags contain 1 bright white bag, 2 muted yellow bags.\ndark orange bags contain 3 bright white bags, 4 muted yellow bags.\nbright white bags contain 1 shiny gold bag.\nmuted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\nshiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\ndark olive bags contain 3 faded blue bags, 4 dotted black bags.\nvibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\nfaded blue bags contain no other bags.\ndotted black bags contain no other bags.".split(/\n/g);
// Find all bags that can contain gold bag directly
// const directBags = bagName => {
//     return itemList.filter(string => string.includes(bagName)).map(item => item.split(' bags')[0])
// } 
// Find all bags that can contain gold bag indirectly, assume 3 nesting levels
// const indirectBags = directBags => {
//     var indirectBags: string[] = []
//     for (var i = 0; i < directBags.length; i++) {
//         for (var j = 0; j < itemList.length; j++) { 
//             if (itemList[j].includes(` ${directBags[i]}`)) {
//                 indirectBags.push(itemList[j])
//             }
//         }
//     }
//     return indirectBags
// }
// Remove duplicates
// const uniqueIndirectBags = (indirectBags) => {
//     var uniqueIndirectBags: string[] = []
//     for (var i = 0; i < indirectBags.length; i++) {
//         for (var j = 0; j < indirectBags.length; j++) {
//             if (!uniqueIndirectBags.includes(indirectBags[i])) {
//                 uniqueIndirectBags.push(indirectBags[i])
//             }
//         }
//     }
//     return uniqueIndirectBags
// }
var find = function (container, contains, counter, word, bags) {
    // What does this do
    // What is the bag array
    if (!bags.includes(word)) {
        bags.push(word);
        return bags;
    }
    for (var i = 0; i < contains.length; i++) {
        for (var j = 0; j < contains.length; j++) {
            if (contains[j] === contains[i]) {
                bags = find(container, contains, counter, container[i], bags);
                // counter++
            }
        }
    }
    return bags;
};
var parsedList = [];
var container = [];
var contains = [];
for (var i = 0; i < itemList.length; i++) {
    var item = itemList[i]
        .replace(/bags/g, '')
        .replace('bag', '')
        .replace('1', '')
        .replace('2', '')
        .replace('3', '')
        .replace('4', '')
        .replace('5', '')
        .replace('6', '')
        .replace('7', '')
        .replace('8', '')
        .replace('9', '')
        .replace(" c", "c")
        .replace(' .', '')
        .replace(' , ', ',')
        .replace('contain  ', 'contain ');
    parsedList.push(item);
    var splitItem = item.split(' contain ');
    container.push(splitItem[0]);
    contains.push(splitItem[1].split(', '));
}
var bags = find(container, contains, 0, 'shiny gold', []);
console.log(bags.length - 1);

const cities = ["Paris", "London", "Berlin",  "Athens"]
const numbers = [10, 101, 103, 77, 99, 123, 690, 590]

console.log(cities.sort())
console.log(numbers.sort())

/**
numbers.sort(function(a, b) {
    if (a > b) return 1
    if (a < b) return -1
    if (a === b) return 0
})
**/

numbers.sort(function(a, b) {       //ίδιο με το απο πάνω ascending
    return a - b;
})


console.log(numbers)

numbers.sort(function(a, b) {       //ανάποδο με το απο πάνω descending 
    return a - b;
})


console.log(numbers.reverse())
//console.log(numbers)


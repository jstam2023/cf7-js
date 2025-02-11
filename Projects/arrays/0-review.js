const cities = ["Athens", "Paris", "Toronto"]

//add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

//sort modifies the array

cities.sort()

cities.sort((a, b) => a.localeCompare(b))

cities.sort((a, b) => a.localeCompare(b, "en"))

// creates a shallow copy
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))

// Copy deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

// Shallow copies -- Spread operator
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)

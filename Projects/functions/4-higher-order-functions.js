//Higher order functions
// Function factory
//Closure
function  createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier
    }
}

const createMultiplier2 = (multiplier) => (num) => num * multiplier

const double = createMultiplier(2)
const tripple = createMultiplier(3)

console.log((double(5)))
console.log(tripple(10))


const initial = { name: "Alice", age: 30, address: {street: "Patision", num: 76}}

// 1. With spreading is shallow copy
const copyInitial = {...initial}    
console.log(copyInitial)


//2. Object type
const copyInitial2 = Object.assign({}, initial)
console.log(copyInitial2)

//3. With JSON function -- deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))
console.log(copyInitial3)


//4. Deep copy
const copyInitial4 = structuredClone(initial)
console.log(copyInitial4)

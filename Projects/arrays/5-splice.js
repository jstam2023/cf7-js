const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const arr2 = arr.splice(0, 4)

console.log(arr)
console.log(arr2)


// Insert
arr.splice(0, 0, 10)
console.log(arr)

//Update
arr.splice(0, 1, 11)
console.log(arr)


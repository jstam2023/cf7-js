const s = "Coding Factory"

const substr = s.substring(0,6)                // start index, end index is exclusive
console.log(s)
console.log(substr)


const mySlice = s.slice(7)
const mySlice1 = s.slice(7, 10)             // end index exclusive
console.log(mySlice)
console.log(mySlice1)

const copyStr = s.slice()
console.log(copyStr)

const mySlice2 = s.slice(-7)
console.log(mySlice2)


const mySlice3 = s.slice(-7, -5)
console.log(mySlice3)


const splitted = s.split(" ")
console.log(splitted)


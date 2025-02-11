const students = ["Alice", "Andreas", "Bob", "Costas"]


students.forEach(function(val, index) {
    console.log(val, index)
})

students.forEach(function(student) {
    console.log(student)
})


students.forEach(function(student, index) {
    console.log(student, index)
})


students.forEach(function(student, _, arr) {
    console.log(student, arr)
})


students.forEach(function(student, index, arr) {
    console.log(student, index, arr)
})


let filtered = students.filter(student => student === "Andreas")
console.log(filtered)

let mapped = students.map(student => "Student " + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)




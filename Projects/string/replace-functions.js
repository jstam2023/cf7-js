const s = "Coding Factory"
const s2 = "CODING FACTORY"

const replaced = s.replace("Coding", "Code")

console.log(s)


console.log(replaced)

const lower = s.toLowerCase()
const upper = s.toUpperCase()

console.log(lower)
console.log(upper)

if (s.toUpperCase() === s2.toUpperCase()) {
    console.log("Equals")
}

const firstname = " Alice    "
if (firstname.trim() === "Alice") {
    console.log("Equal")
}

console.log("Coding".repeat(12))

const concat = s + s2 + "Goodnight!"
const concat2 = s.concat(s2).concat("bye")

console.log(concat)
console.log(concat2)
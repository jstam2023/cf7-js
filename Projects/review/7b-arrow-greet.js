const greet = (username) => `Hello, ${username}`
const greet1 = username => `Hello, ${username}`         // Αν είναι μία παράμετρος δεν χρειάζονται οι παρενθέσεις
const sayHello = () => console.log("Hello")
const add = (a, b) => a + b;

console.log(greet("Anna"))
sayHello()
console.log(add(5,10))
const jsObj = {
    id: 1,
    hobbies : [{id: 1, title: "gym"}, {id: 2, title: "music"}]
}

//Serialization
const jsonStr = JSON.stringify(jsObj)
console.log(jsonStr)

//deserialize
constObj2 = JSON.parse(jsonStr)

console.log(constObj2)
const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// function που επιστρέφει ενα πίνακα με τις θέσεις 
// στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός


const getIndexes = (arr, val) => {
    const indexes = []
    arr.forEach((v, index) => {
        if(v == val) {
            indexes.push(index)
        }
    })
    return indexes
}

console.log(getIndexes(arr, 2))


/**arr.forEach(function(v, index) {
    if (v == val) {
        indexes.push(index)
    }
}) 
    **/



let arr2 = []
let num = 2
for (let i = 0; i < arr.length; i++) {
    if(arr[i] == num) {
        arr2.push(i)
    }
}

console.log(arr2)

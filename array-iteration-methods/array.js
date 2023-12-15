//use .map to return square root of the array
// let a = [2, 25, 100, 30, 60]
// let newA = a.map ((element, index, array) => {
    // return Math.sqrt(element)
    // })


// console.log(newA)



//use .filter element to get only the perfect sqrts of each
// let a = [2, 25, 100, 30, 64]
// let newA = a.filter((element, index, array) => {
//     return Math.sqrt(element) % 1 === 0
//     })

// console.log(newA)

//one way to do this...
// let a = [2, 25, 100, 30, 64]
// let newA = a.filter((element, index, array) => {
//     return element % Math.sqrt(element) === 0
//     })

// console.log(newA)




// let a = ['I', 'love', 'swiss', 'cheese']

// let newA = a.map((element, index, array) => {
//     return element.toUpperCase()
// })

// console.log(newA)



// let a = ['I', 'Love', 'Swiss', 'Cheese']
// let newA = []
// for (i = 0; i < a.length; i++){
//     newA.push(a.map(i.toUpperCase))
    
// }
// return newA
// console.log(newA)

// let upperCaseArray = a.map(element => element.toUpperCase)



let arr = ['p', 'o', 'r', 't', 'w', 'v', 'w', 'u', 'c']
let newA = arr.map ((element, index, array) => {
    return (element + element + element)
})
console.log(newA)



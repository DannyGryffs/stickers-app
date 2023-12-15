// const someObj = {
//     name: 'danny',
//     age: 23,
//     hobbies: ['painting', 'cooking']
// }
// //sometimes dot notation doesnt cut it 

// function displayProperty(propertyString, object) {
// console.log(object[propertyString])

// }

// displayProperty('name', someObj) //'danny'
// displayProperty('hobbies', someObj) //'painting'

//understanding the different types of copying in js
// let a = [1,2,3,[4,5]] //original array
// let b = [...a] //deep copy of array's primitive values (shallow of non-primitive)
// let c = a //shallow copy
// let d = structuredClone(a) //deep copy

// // BEHOLD!

// console.log(a,b,c,d)

// a.push(6)

// console.log(a,b,c,d)

// a[3].push(5.5)

// console.log(a,b,c,d)

//these both do the same thing


//without destructuring// (Array)

// const fruitsArray = ['apple', 'berry', 'cherry'];

// let fruit0 = fruitsArray[0]
// let fruit1 = fruitsArray[1]
// let fruit2 = fruitsArray[2]

// console.log(fruit0)
// console.log(fruit1)
// console.log(fruit2)

//////////////////////////////////////////

//with destructuring// (Arrays)

// const [fruit0, fruit1, fruit2] = fruitsArray;

// console.log(fruit0);//apple
// console.log(fruit1);//berry
// console.log(fruit2);//cherry 

///////////////////////////////////////////


// const veggiesObject = {
//     tomato: 4,
//     celery: 7,
//     rutabaga: 8
// }

//without destructuring (Object)

// let tomato = veggiesObject.tomato
// let celery = veggiesObject.celery
// let rutabaga = veggiesObject.rutabaga

// console.log(tomato)
// console.log(celery)
// console.log(rutabaga)

//with destructuring (Object)

// let {tomato, celery, rutabaga} = veggiesObject;

// console.log(tomato)
// console.log(celery)
// console.log(rutabaga)

////////////////////////////////////


// console.log(Object.entries(veggiesObject));

// for (const something in Object.entries(veggiesObject)) {
//     console.log(something);
// }

// for (const something of Object.entries(veggiesObject)) {
//     console.log(something)
// }

// for (const [veggie, num] of Object.entries(veggiesObject)) {
//     console.log(veggie)
//     console.log(num)
// }


const fruits = [
    {
      name: 'apple',
      genus: 'Malus',
      colors: ['red', 'yellow', 'green'],
    },
    {
      name: 'berry',
      genus: 'Vaccinium',
      colors: ['red', 'blue'],
    },
    {
      name: 'cherry',
      genus: 'Prunus',
      colors: ['red'],
    },
  ];
  
  //obtain str 'vaccinium'

//   console.log(fruits[1].genus)

//   //obtain str 'cherry'

//   console.log(fruits[2].name)

// console.log(fruits[1].colors)

//Q: loop through the red and blue array!!

//for loop- comp
// for(let i = 0; i < fruits[1].colors.length; i++){
//     console.log(fruits[1].colors[i]);
// }

//for of loop easier 
// //loop through value of array
// for (let fruit of fruits[1].colors){
//     // value^^  array^^
//     console.log(fruit);
// }

// //we use a for of loop here because were looping through an array

// for (let fruit of fruits[0].colors){
//     console.log(fruit);
//     for (let fruit of fruits[1].colors){
//         console.log(fruit);
//         for (let fruit of fruits[2].colors){
//             console.log(fruit)
//         }
//     }
    
// }



// const fruits = [
//     {
//       name: 'apple',
//       genus: 'Malus',
//       colors: ['red', 'yellow', 'green'],
//     },
//     {
//       name: 'berry',
//       genus: 'Vaccinium',
//       colors: ['red', 'blue'],
//     },
//     {
//       name: 'cherry',
//       genus: 'Prunus',
//       colors: ['red'],
//     },
//   ];

for (const fruitObj of fruits){
    for(const color of fruitObj.colors) {
        console.log(color)
    }
}
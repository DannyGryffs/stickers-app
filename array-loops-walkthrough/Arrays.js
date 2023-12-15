
const meals = ['artichokes', 'bbq', 'chili', 'donuts'];

//push

meals.push('eggs');
meals.push('fajitas');

// console.log(meals)

//pop

const lastMeal = meals.pop();

// console.log(lastMeal)

// console.log (meals)

const students = []

students[0] = 'Jane'

students.push('Bob');

//how we access first student/index of array
// console.log(students[0])

//shift unshift

meals.unshift('tacos');
// console.log(meals)

//item is added to the beginning of our array ^

// meals.shift()

// console.log(meals)
// item is removed from array

// const firstItem = meals.shift();
// console.log(meals, firstItem)

//includes 

const hasBbq = meals.includes('bbq');
// console.log(hasBbq)

//indexOf

const itemIdx = meals.indexOf('chili')
// console.log(itemIdx)

//slice
 //lets grab the middle indicies ** made into new array
const middleItems = meals.slice(1,4)
// console.log(middleItems)

// console.log(meals)

const mealsCopy = [...meals]
// console.log(mealsCopy)


//tangent

let a = [1,2,3]

let b = [1,2,3]

let c = a 

a.push(4)

// console.log(a)
// console.log(b)
// console.log(c)

//c is a copy of a :|

//splice
//lets splice something out of an array-like pop only wherever you want and has the ability to replace if desired
// console.log(meals)
// meals.splice(2,1)
//removed index 2^ [bbq]
// console.log(meals)
// meals.splice(2, 1, 'pizza')
//removed index 2 and replaced it with 'pizza
// console.log(meals)




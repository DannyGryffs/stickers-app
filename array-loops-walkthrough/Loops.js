//While Loops

// const perfectTemp = 125;
// let teaTemp = 130;

// //what if this \/ was '<' ==== infinite looooop
//  while(teaTemp > perfectTemp){
//     teaTemp --; 
//    // what if /\ was '++' instead of '--' another infinite loop!
//     console.log(`Tea temperature is now ${teaTemp}`)
//  }

// const students = ['Alice', 'Charlie', 'Bob', 'Diana'];

// let i = 0;
// while(i < students.length) {
//     console.log(students[i])
//     if(students[i] === 'Bob'){
//         console.log(`Hi ${students[i]}`);
//         break;
//     }
//     i++;
// }

// let i = 0;

// while(i < 5){
//     console.log(i);
//     i++
// }
//For Looops (generic)

//how do we go through each item in an array? \/
// const meals = ['artichokes', 'bbq', 'chili', 'donuts'];

// for(let i = 0; i < meals.length; i++){
//     console.log(meals[i])
// }

//how do we do this backwards??

// for (let i = meals.length -1; i >= 0; i--){
//     console.log(meals[i])
// }


////////consfusing tangent...*************

// const students = ['Alice', 'Bob', 'Charlie', 'Diana'];
// let i = 0;

// const idx = null;

// students.indexOf("Bob")

// for(let i = 0; i < students.length; i++){

// }


//for of loops
const meals = ['artichokes', 'bbq', 'chili', 'donuts'];

for(let meal of meals){
    console.log(meal);
    if(meal === 'chili'){
        console.log("Baby it's cold outside!");
        break;
    }
}
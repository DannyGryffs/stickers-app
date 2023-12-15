//use for loops to print numbers 1-20 to console.

// for(let i = 0; i < 20; i++){
//     console.log(i)
// }


//use for loops to print numbers 20-0 to console.
// for(let i = 20; i > 0; i--){
//     console.log(i)
// }

//use for loops to print all even numbers between 0-20
// for(let i = 0; i < 20; i += 2){
//     console.log(i)
// }

// print all numbers between 0-20 excluding numbers 10,11,12,13,14
// for(let i = 0; i < 20; i ++){
//     if(i < 10 || i > 14){
//         console.log(i)
//     } 
// }

for(let i = 0; i < 20; i ++){
    if(i < 10 || i > 14 ){
        console.log(i)
    }else if(i > 10 || i < 14){
        console.log('bad number')
    }
}
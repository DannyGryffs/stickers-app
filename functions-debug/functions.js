//adding numbers

//bc addNums doesn't receive a third parameter, the string 'banana' will be ignored
function addNums(num1, num2){
    return num1 + num2;
}

// const total = addNums(2, 3, 'banana')



//adding/concatenating strings
function addWords(word1, word2){
    return word1 + ' ' + word2
}

// console.log(addWords('Dev', 'Mountain'))

function officialLanguage(country){
    if(country === 'Mexico'){
        return 'Spanish';
    }else if (country === 'Canada') {
        return ['English', 'French'];
    }
}
// console.log(officialLanguage('Mexico'))

//function that will calculate tip
function calculateTip(amount, percentage = 0.15) {
    return amount * percentage;
}

// console.log(calculateTip(10)) // 1.5

// const grandTotal = '$' + (calculateTip(10) + 10)

// console.log(grandTotal)


// ****study this \/*****   
// function greet(person, beforeNoon, afterMidnight = false) {
//     if (beforeNoon) {
//       return `Good morning, ${person}!`;
//     } else if (afterMidnight) {
//       console.log(`Don't wake ${person}, they're asleep!`);
//     } else {
//       return `Hello, ${person}!`;
//     }
//   }
  
//   const name1 = 'Andrew';
  
//   const greeting1 = greet(name1, false);
//   const greeting2 = greet('Bob', false, true);
//   const greeting3 = greet('Clara', true);

function findValue(arr, str){
    for(const word of arr){
        if(word === str){
            return true;

        }
    }
    return false;
}

const myArr = ['Ford', 'Mitsubishi', 'Mercedes', 'Toyota']

// console.log(findValue(myArr, 'Toyota')); //true

function findNum(numArr, num){
    if(typeof(num) !== 'number'){
        return "must pass in a number as the second param"
    }


    num = +num
    return numArr.includes(num);
}

console.log(findNum([1,2,3,4,5], '5'));
// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
return  x / y;
}
divide(10, 2);

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2;
}
average(10, 2)
// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if(x - y < 0.001){
    return true
  }else{
    return false;
  }
}
approximatelyEqual(10.001, 10);

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName
}
fullName('John', 'Doe');
// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  const madLib = `${person} was drinking ${beverage} at ${location}.`;
  return madLib;
  }
  generateSentence('Kay', 'coffee', 'the local cafe');
  

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
//complete-working code!-broke functions portion of test...
function censorVowels(string) {
  let newStr = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'a' || string[i] === 'e'){
      newStr = newStr + '*';
    } else if(string[i] === 'i' || string[i] === 'o'){
      newStr = newStr + '*';
      } else if(string[i] === 'u'){
        newStr = newStr + '*';
        } else{
          newStr = newStr + string[i];
          }
  }
  return newStr;
}
censorVowels('javascript');
// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
//complete
function stickyCase(string) {
  let newStr = string.toLowerCase().split('');
  for(let i = 1; i < newStr.length; i += 2){
    newStr[i] = newStr[i].toUpperCase();
  }
  return newStr.join('');
}
stickyCase('hello world');


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
  function leetspeak(string) {
    let newStr = '';
    for(let i = 0; i < string.length; i++){
      if(string[i] === 'a'){
        newStr = newStr + 4;
      } else if(string[i] === 'e'){
        newStr = newStr + 3;
        } else if(string[i] === 'i'){
          newStr = newStr + 1;
          } else if(string[i] === 'o'){
            newStr = newStr + 0;
            } else if(string[i] === 's'){
              newStr = newStr + 5;
              } else if(string[i] === 't'){
                newStr = newStr + 7;
                }else{
                  newStr = newStr + string[i];
                }
    }
    return newStr;
}
leetspeak('javascript');

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};

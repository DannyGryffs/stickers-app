function add(num1, num2){
  return num1 + num2
}

function sub(num1, num2){
  return num1 - num2
}

function mult(num1, num2){
  return num1 * num2
}

function div(num1, num2){
  return num1 / num2
}

function pwr(num1, num2){
  return num1**num2
}

function modu(num1, num2){
  return num1 % num2
}

function sqrt(num1){
  return Math.sqrt(num1)
}




function calculate(expression) {

  const tokens = expression.split(' ')

  let num1;
  let operator;
  let num2;
  
  if(tokens.length === 3){
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])
  }else if(tokens.length === 2){
    operator = tokens[0]
    num1 = Number(tokens[1])
  } else {
    alert 
  }
  
  if(Number.isNaN(num1) || Number.isNaN(num2)){
    alert("You've entered an invalid number!!")
    return
  }
  
  if(operator === '+'){
    return add(num1, num2)
  }else if(operator === '-'){
    return sub(num1, num2)
  }else if(operator === '*'){
    return mult(num1, num2)
  }else if(operator === '/'){
    return div(num1, num2)
  }else if(operator === '^'){
    return pwr(num1, num2)
  }else if(operator === '%'){
    return modu(num1, num2)
  }else if(operator === 'sqrt'){
    return sqrt(num1)
  }
}




  // console.log(tokens)
  // add(num1, num2)

  // sub(num1, num2)

  // mult(num1, num2)

  // div(num1, num2)

  // pwr(num1, num2)

  // modu(num1, num2)

  // sqrt(num1)

console.log(calculate(1 + 2))










/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});


const veggies = document.querySelector("#innerHTML-example");

console.log(veggies.innerText);
console.log(veggies.innerHTML);

veggies.innerHTML = '<li>daikon</li>';

const catPhoto = document.querySelector("img")

console.log(catPhoto.getAttribute("src"));

catPhoto.setAttribute("src", )

catPhoto.setAttribute("src", 'https://ntbrand-wp.s3.amazonaws.com/mystart/wp-content/uploads/2023/04/18111805/British_Shorthair_636d0bc965dc8a9e4afff8ff-7-e1681831199917.jpeg')

const p = document.querySelector('#class-example');

p.className = 'red bold';

p.classList.remove('bold');
console.log(p.classList.contains('bold')); 

p.classList.toggle('red');

const button = document.querySelector('#style-example');

const button2 = document.querySelector('#remove-example');

button2.remove();

button.style.backgroundColor = 'pink';

const input = document.querySelector('#value-example');
input.value = 'Email:';

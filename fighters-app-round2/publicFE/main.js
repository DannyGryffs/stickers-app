let createForm = document.getElementById('create-form');
let createNameInput = document.getElementById('create-name-input');
let createPowerInput = document.getElementById('create-power-input');
let createHealthInput = document.getElementById('create-health-input');
let deleteForm = document.getElementById('delete-form');
let deleteByNameInput = document.getElementById('delete-by-name-input')

createForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (isNaN(+createPowerInput.value)) {
        alert('you need to put a number in for your power!');
        ;return;
    }
    
    if (isNaN(+createHealthInput.value)) {
        alert('you need to put a number in for your Health!');
        return;
    };

    let maBod = {
        name: createNameInput.value,
        power: createPowerInput.value,
        health: createHealthInput.value
    };

    axios.post('/create-fighter', maBod)
     .then((response) => {
        console.log(response.data);
     })
     .catch((error) => {
        console.log(error)
     });
});

 
axios.get('/fighters')
.then((result) => {
   loadFightersToDom(result.data);
})
.catch((error) => {
   console.log(error)
});

deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let name = deleteByNameInput.value

    axios.delete('/delete-fighter?name=' + name)
    .then((response) => {
        loadFightersToDom(response.data)
        alert('fighter removed')
    })
    .catch((error) => {
        console.log(error)
    })
})

function loadFightersToDom(fightersArray) {

    document.getElementById('fighters-display').innerHTML = ''

    for (let i = 0; i < fightersArray.length; i++){
        let containerDiv = document.createElement('div')
        let heading = document.createElement('h3')
        let powerP = document.createElement('p')
        let healthP = document.createElement('p')

        containerDiv.appendChild(heading)
        containerDiv.appendChild(powerP)
        containerDiv.appendChild(healthP)

        heading.innerHTML = fightersArray[i].name
        powerP.innerHTML = 'Power: ' + fightersArray[i].power 
        healthP.innerHTML = 'Health: ' + fightersArray[i].health 
        
       document.getElementById('fighters-display').appendChild(containerDiv)
    }
}   
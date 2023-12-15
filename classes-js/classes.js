class Vehicle {
    constructor(year, make, model){
        this.year = year;
        this.make = make;
        this.model = model;
    }

    oilChange(lastChange, currentMiles){
        console.log("hit")
        if(currentMiles - lastChange > 4000){
            console.log(`Your ${this.model} is ready for an oil change!`);
        }
    }
}

const focus = new Vehicle(2022, "Ford", "Focus");

console.log(focus)

focus.oilChange(20000, 25000)

class Truck extends Vehicle {
    constructor(year, make, model, bedlength){
        super(year, make, model);
        this.bedlength = bedlength
    }
}

const raptor = new Truck(2023, "Ford", "Raptor", "Short");

console.log(raptor);
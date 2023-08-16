//class
class Car {
    constructor(made, model){
        this.made = made;
        this.model = model;
    }

    getInfo(){
        return `The car is a ${this.made} ${this.model}`;
        
    }
}

//object
let car1 = new Car(1980, 'toyota');
let car2 = new Car(2004, 'porsche');

console.log(car1.getInfo());
console.log(car2.getInfo());

//inheritance 
class electricCar extends Car {
    constructor(made, model, battery) {
        super(made, model);
        this.battery = battery;
    }

    getInfo2() {
        return `The car is a ${this.made} ${this.model} which has ${this.battery} KWH`;
    }
}

let elecCar = new electricCar(1984, 'Ovemm', 250);

console.log(elecCar.getInfo2());
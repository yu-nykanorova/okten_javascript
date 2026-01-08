// #5kla3yMpgp
// – (Те саме, що завдання #vV9a6584I5, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car {

    constructor(model, producer, year, maxSpeed, engineDispl) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineDispl = engineDispl;
    }

    drive() {
        console.log(`Driving at ${this.maxSpeed}km per hour.`);
    }

    info() {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }

    increaseMaxSpeed(addToSpeed) {
        if (addToSpeed > 0) {
            return this.maxSpeed += addToSpeed;
        }
    }

    changeYear(newValue) {
        if (newValue >= 1885) {
            return this.year = newValue;
        }
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class Driver {
    constructor(name, driverLicense, ...args) {
        this.name = name;
        this.driverLicense = driverLicense;
    }
}

const beetle = new Car("Beetle", "Volkswagen", 2012, 220, 2.0);
beetle.drive();
beetle.info();
console.log(`New max speed value of ${beetle.model} is ${beetle.increaseMaxSpeed(10)}km/h`);
console.log(`Changed year of ${beetle.model} production is ${beetle.changeYear(2017)}`);

const max = new Driver("Max", 234567);
beetle.addDriver(max);
console.log(`Driver of the ${beetle.model} is ${beetle.driver.name} (license number - ${beetle.driver.driverLicense})`);
console.log(beetle);
// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, producer, year, maxSpeed, engineDispl) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineDispl = engineDispl;
    this.drive = function () {
        console.log(`Driving at ${this.maxSpeed}km per hour.`);
    };
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] === "function") {
                console.log(`function to ${key}`);
            } else {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (addToSpeed) {
        if (addToSpeed > 0) {
            return this.maxSpeed += addToSpeed;
        }
    };
    this.changeYear = function (newValue) {
        if (newValue >= 1885) {
            return this.year = newValue;
        }
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

function Driver(name, driverLicense, ...args) {
    this.name = name;
    this.driverLicense = driverLicense;
}

const audi = new Car("Audi A5", "Audi", 2007, 240, 2.0);
audi.drive();
audi.info();
console.log(`New max speed value of ${audi.model} is ${audi.increaseMaxSpeed(10)}km/h`);
console.log(`Changed year of ${audi.model} production is ${audi.changeYear(2010)}`);

const anna = new Driver("Anna", 123456);
audi.addDriver(anna);
console.log(`Driver of the ${audi.model} is ${audi.driver.name} (license number - ${audi.driver.driverLicense})`);
console.log(audi);


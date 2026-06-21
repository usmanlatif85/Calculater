class Car{
    name;
    model;
    color;
    constructor(name, model, color){
        this.name = name;
        this.model = model;
        this.color = color;
    }
    getCarInfo(){
        return `Car name: ${this.name}, model: ${this.model}, color: ${this.color}`;
    }

}
let car1 = new Car("Toyota", "Corolla", "Red");
console.log(car1.getCarInfo());
class ElectricCar extends Car{
    batteryCapacity;
    constructor(name, model, color, batteryCapacity){
        super(name, model, color);
        this.batteryCapacity = batteryCapacity;
    }
    getElectricCarInfo(){
        return `${super.getCarInfo()}, battery capacity: ${this.batteryCapacity} kWh`;
    }
}
let electricCar1 = new ElectricCar("Tesla", "Model 3", "Blue", 75);
console.log(electricCar1.getElectricCarInfo());
const add = (...args) => {
    return args
}
console.log(add(1, 2, 3, 4, 5));

    



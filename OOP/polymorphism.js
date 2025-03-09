class Vehicle {
    start() {
        return "Starting the vehicle...";
    }
}

class Car extends Vehicle {
    start() {
        return "Starting the car... Vroom!";
    }
}

class Motorcycle extends Vehicle {
    start() {
        return "Starting the motorcycle... Brrm!";
    }
}

// ✅ Polymorphism in action
const vehicles = [new Car(), new Motorcycle()];

vehicles.forEach(vehicle => {
    console.log(vehicle.start());  // ✅ Calls the overridden method dynamically
});

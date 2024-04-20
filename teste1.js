function IFactory() {}

IFactory.prototype.drive = function(miles) {
  console.log(`Driving the vehicle: ${miles} km`);
}

class Bike {
  drive(miles) {
    console.log(`Driving the Bike: ${miles} km`);
  }
}

class Scooter {
  drive(miles) {
    console.log(`Driving the Scooter: ${miles} km`);
  }
}

class VehicleFactory {
  getVehicle(vehicle) {
    switch (vehicle) {
      case "Scooter":
        return new Scooter();
      case "Bike":
        return new Bike();
      default:
        throw new Error(`Vehicle ${vehicle} cannot be created`);
    }
  }
}

class Program {
  static main() {
    const factory = new VehicleFactory();

    const scooter = factory.getVehicle("Scooter");
    scooter.drive(10);

    const bike = factory.getVehicle("Bike");
    bike.drive(20);
  }
}

Program.main();

import { inject } from "./inject";
import { Injector } from "./injector";

// tslint:disable max-classes-per-file

class Engine {
    constructor(public power: string) {

    }
}

class Tire {
    constructor(public amount: number) {
    }
}

class Car {
    // This example shows property injection instead of constructor injection
    @inject("Engine")
    public engine: Engine;
    @inject("Tire")
    public tire: Tire;

}

const container: Injector = new Injector();
container.mapValue("Engine", new Engine("400 PS"));
// tslint:disable-next-line:no-magic-numbers
container.mapValue("Tire", new Tire(4));

const car: Car = container.instantiate(Car);

// tslint:disable-next-line:no-console
console.log(`My car has ${car.engine.power} and ${car.tire.amount} tires`);

// tslint:enable max-classes-per-file

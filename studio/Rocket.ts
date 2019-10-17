import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let calculatedMass = 0;
        for (let i = 0; i < items.length; i++) {
            calculatedMass += items[0].massKg;
        } return calculatedMass;
    }
    
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) 
        {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            console.log(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}
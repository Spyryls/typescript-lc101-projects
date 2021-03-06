import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Ship {
    name: string;
    totalCapacityKg: number;
    cargoHold: Cargo[] = [];
    crewRoster: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        // return items.reduce((sum, item) => sum + item.massKg, 0);
        let calculatedMass = 0;
        for (let i = 0; i < items.length; i++) {
            calculatedMass += items[i].massKg;
        } 
        return calculatedMass;
    }

    currentMassKg(): number {
        return this.sumMass(this.crewRoster) + this.sumMass(this.cargoHold);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            console.log(`Can add ${item.massKg}kg, current mass: ${this.currentMassKg()}kg`)
            return true;    
        }
        console.log(`Cannot add ${item.massKg}kg, current mass: ${this.currentMassKg()}kg exceeds weight limits`)
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoHold.push(cargo);
            console.log(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.crewRoster.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}
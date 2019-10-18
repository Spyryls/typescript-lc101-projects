"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.crewRoster = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // return items.reduce((sum, item) => sum + item.massKg, 0);
        var calculatedMass = 0;
        for (var i = 0; i < items.length; i++) {
            calculatedMass += items[i].massKg;
        }
        return calculatedMass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.crewRoster) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            console.log("can add " + item.massKg + ", current mass: " + this.currentMassKg());
            return true;
        }
        console.log("cannot add " + item.massKg + ", current mass: " + this.currentMassKg());
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            console.log(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.crewRoster.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;

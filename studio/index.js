"use strict";
exports.__esModule = true;
var Astronaut_1 = require("./Astronaut");
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var normandySr2 = new Rocket_1.Ship('normandySr2', 8500);
var crewRoster = [
    new Astronaut_1.Astronaut(75, 'EDI'),
    new Astronaut_1.Astronaut(81, 'Shepard'),
    new Astronaut_1.Astronaut(99, 'Liara'),
    new Astronaut_1.Astronaut(96, "Garrus"),
    new Astronaut_1.Astronaut(68, "Jeff"),
    new Astronaut_1.Astronaut(74, "Cortez"),
    new Astronaut_1.Astronaut(83, "Ashley"),
    new Astronaut_1.Astronaut(56, "Javik"),
    new Astronaut_1.Astronaut(113, "James")
];
for (var i = 0; i < crewRoster.length; i++) {
    var astronaut = crewRoster[i];
    var status_1 = '';
    if (normandySr2.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log(astronaut.name + ": " + status_1);
}
var cargo = [
    new Cargo_1.Cargo(2107.39, "Armory"),
    new Cargo_1.Cargo(1000.39, "Space Probes"),
    new Cargo_1.Cargo(523, "Medical and Tech Supplies"),
    new Cargo_1.Cargo(1153.12, "Consumables"),
    new Cargo_1.Cargo(34, "Fish, Models, Personals"),
    new Cargo_1.Cargo(1984.89, "UT-47 Kodiak"),
];
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    if (normandySr2.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log(c.material + ": " + loaded);
}
console.log("Final cargo and crew mass: " + normandySr2.currentMassKg() + " kg.");

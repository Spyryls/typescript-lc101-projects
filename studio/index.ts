import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Ship } from './Rocket';

let normandySr2: Ship = new Ship('normandySr2', 7500);

let crewRoster: Astronaut[] = [
   new Astronaut(75, 'EDI'),
   new Astronaut(81, 'Shepard'),
   new Astronaut(99, 'Liara'),
   new Astronaut(56, "Tali")
];

for (let i = 0; i < crewRoster.length; i++) {
   let astronaut = crewRoster[i];
   let status = '';
   if (normandySr2.addAstronaut(astronaut)) {
      status = "On board";
   } else {
      status = "Not on board";
   }
   console.log(`${astronaut.name}: ${status}`);
}

let cargo: Cargo[] = [
   new Cargo(2107.39, "Armory"),
   new Cargo(1000.39, "Space Probes"),
   new Cargo(523, "Medical and Tech Supplies"),
   new Cargo(1153.12, "Consumables"),
   new Cargo(34, "Fish, Models, Personals"),
   new Cargo(2107.39, "M35 Mako"),
];

for (let i = 0; i < cargo.length; i++) {
   let c = cargo[i];
   let loaded = '';
   if (normandySr2.addCargo(c)) {
      loaded = "Loaded"
   } else {
      loaded = "Not loaded"
   }
   console.log(`${c.material}: ${loaded}`);
}

console.log(`Final cargo and crew mass: ${normandySr2.currentMassKg()} kg.`);
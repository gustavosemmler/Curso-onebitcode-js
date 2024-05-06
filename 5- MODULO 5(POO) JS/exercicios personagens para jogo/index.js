const God = require("./God")
const Mage = require("./Mage")
const Plebe = require("./Plebe")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)
const gustavo = new God('Gustavo', 999, 999, 999, 999)
const sidboy = new Plebe('Sidney Rafael', 1, 1, 1, 1)

console.table({arthur, beatrice, cain, gustavo, sidboy})

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({arthur, beatrice, cain, gustavo, sidboy})

const Character = require("./Character");

class Plebe extends Character {
    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.exports = Plebe
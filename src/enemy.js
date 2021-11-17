let Character = require('./character')

class Enemy extends Character {

  attack(player, game) {
    let message = '';

    // attack the player
    let chanceOfHit = Math.floor(Math.random() * 3)
    if(chanceOfHit >= 1) {
      let attackPower = Math.floor(Math.random() * this.strength) + 1
      player.health -= attackPower

      if(attackPower == 10) {
        message += `${this.name} threw a critical hit!`
      }

      if(player.health <= 0) {
        message += `${player.name} died!`
        game.isCombat = false
      }else {
        message += `${this.name} hit ${player.name}, ${player.name} now has ${player.health} health points!`
      }
    }else {
      message += `${this.name} attack missed!`
    }

    return message;
  }

}

module.exports = Enemy
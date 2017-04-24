class Enemy {
  constructor(name, options) {
    this.name = name

    if(options != null) {
      this.health = (options.health != undefined) ? options.health : 100
      this.strength = (options.strength != undefined) ? options.strength : 10
    }else {
      this.health = 100
      this.strength = 10
    }
  }
  
  stats() {
    console.log(`
    ${this.name} stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }

  attack(player, game) {
    // attack the player
    let chanceOfHit = Math.floor(Math.random() * 3)
    if(chanceOfHit >= 1) {
      let attackPower = Math.floor(Math.random() * this.strength)
      player.health -= attackPower

      if(attackPower == 10) {
        console.log(`${this.name} threw a critical hit!`)
      }

      if(player.health <= 0) {
        console.log(`${player.name} died!`)
        game.isCombat = false
      }else {
        console.log(`${this.name} hit ${player.name}, ${player.name} now has ${player.health} health points!`)
      }
    }else {
      console.log(`${this.name} attack missed!`)
    }
  }
}

module.exports = Enemy
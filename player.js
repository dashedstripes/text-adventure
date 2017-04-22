function Player(name, options) {
  this.name = name
  this.health = 100 || options.health
  this.strength = 10 || options.strength

  this.stats = () => {
    console.log(`
    Your stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }

  this.attack = (enemy, game) => {
    return () => {
      let attackPower = Math.floor(Math.random() * this.strength)
      enemy.health -= attackPower

      if(attackPower == 10) {
        console.log('Critical hit!')
      }

      if(enemy.health <= 0) {
        console.log(`The ${enemy.name} died!`)
        game.isCombat = false
      }else {
        console.log(`You hit the ${enemy.name}, it now has ${enemy.health} health points!`)
      }
    }
  }
}

module.exports = Player
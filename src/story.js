let Enemy = require('./enemy')
let Item = require('./item')

class Story {

  constructor() {
    let goblin = new Enemy('Goblin')
    let snake = new Enemy('Snake', {
      health: 50
    })

    this.enemies = [goblin, snake]
  }

  newEvent(location, game) {
    return () => {
      // random chance of an combat or storyline
      let chance = Math.floor(Math.random() * 100)

      if(chance > 60) {
        // an attack happens
        this.combatEvent(game)
      }else{
        // story arch
        this.storyEvent(location, game)
      }
    }
  }

  combatEvent(game) {
    let currentEnemy = this.enemies[Math.floor(Math.random() * (this.enemies.length))]
    console.log('***** COMBAT MODE *****')
    console.log(`A wild ${currentEnemy.name} attacks!`)
    game.currentEnemy = currentEnemy
    game.isCombat = true
  }

  storyEvent(location, game) {
    // Chance of different story events happening
    let chance = Math.floor(Math.random() * 100)

    if(chance > 60) {
      this.itemEvent(location, game)
    }else {
      console.log(`A new event taking place at ${location.name}!`)
    }
  }

  itemEvent(location, game) {
    let items = [
      new Item('Health Tonic', { health: 10 })
    ]

    let chosenItem = items[Math.floor(Math.random() * items.length)]
    console.log(`You found a ${chosenItem.name}`)
    game.player.inventory.addToInventory(chosenItem)
  }
}

module.exports = Story
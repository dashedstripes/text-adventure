let Enemy = require('./enemy')
let Item = require('./item')

function Story() {

  let goblin = new Enemy('Goblin')
  let snake = new Enemy('Snake', {
    health: 50
  })

  let enemies = [goblin, snake]

  this.newEvent = (location, game) => {
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

  this.combatEvent = (game) => {
    let currentEnemy = enemies[Math.floor(Math.random() * (enemies.length))]
    console.log('***** COMBAT MODE *****')
    console.log(`A wild ${currentEnemy.name} attacks!`)
    game.currentEnemy = currentEnemy
    game.isCombat = true
  }

  this.storyEvent = (location, game) => {
    // Chance of different story events happening
    let chance = Math.floor(Math.random() * 100)

    if(chance > 60) {
      this.itemEvent(location, game)
    }else {
      console.log(`A new event taking place at ${location.name}!`)
    }
  }

  this.itemEvent = (location, game) => {
    let items = [
      new Item('Health Tonic', { health: 10 })
    ]

    let chosenItem = items[Math.floor(Math.random() * items.length)]
    console.log(`You found a ${chosenItem.name}`)
    game.player.inventory.addToInventory(chosenItem)
  }
}

module.exports = Story
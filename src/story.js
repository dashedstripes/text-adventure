let Enemy = require('./enemy')
let Item = require('./item')
let NPC = require('./npc')

class Story {

  constructor() {
    let goblin = new Enemy('Goblin', { health: 50})
    let snake = new Enemy('Snake', { health: 30 })

    this.enemies = [goblin, snake]
    this.npc = new NPC()
  }

  newEvent(location, game) {
    return () => {
      // random chance of an combat or storyline
      let chance = Math.floor(Math.random() * 100)
      ;(chance > 60) ? this.combatEvent(game) : this.storyEvent(location, game)
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
      if(location.hasNPC) {
        this.npc.event(location, game)
      }else {
        console.log(`You notice a traveller ahead of you in ${location.name} has dropped something, you decide to pick it up.`)
        this.itemEvent(location, game)
      }
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
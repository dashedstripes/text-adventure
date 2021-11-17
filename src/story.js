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
    // random chance of an combat or storyline
    let chance = Math.floor(Math.random() * 100)
    
    if(chance > 60) {
      return this.combatEvent(game)
    } else {
      return this.storyEvent(location, game)
    }
  }

  combatEvent(game) {
    let currentEnemy = this.enemies[Math.floor(Math.random() * (this.enemies.length))]
    game.currentEnemy = currentEnemy
    game.isCombat = true
    return `
    ***** COMBAT MODE *****
    A wild ${currentEnemy.name} attacks!
    `;
  }

  storyEvent(location, game) {
    // Chance of different story events happening
    let chance = Math.floor(Math.random() * 100)

    if(chance > 60) {
      return this.itemEvent(location, game)
    }else {
      if(location.hasNPC) {
        return this.npc.event(location, game)
      }else {
        return ```
        You notice a traveller ahead of you in ${location.name} has dropped something, you decide to pick it up.
        ${this.itemEvent(location, game)}
        ```
      }
    }

  }

  itemEvent(location, game) {
    let items = [
      new Item('Health Tonic', { health: 10 })
    ]
    let chosenItem = items[Math.floor(Math.random() * items.length)]
    game.player.inventory.addToInventory(chosenItem)
    return `You found a ${chosenItem.name}`
  }
}

module.exports = Story
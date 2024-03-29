class Item {
  constructor(name, options) {
    this.name = name
    this.options = options || {}
  }

  use(player) {
    if(player != null) {
      if(player.health < 100) {
        if(this.options.health != null) {
          let itemHealth = this.options.health
          let healthBefore = player.health
          let healthAfter = player.health + this.options.health
          let healthRecovered = 0

          if(healthAfter > 100) {
            let healthToAdd = itemHealth + (100 - healthAfter)
            healthRecovered = healthToAdd
            player.health += healthToAdd
          }else {
            healthRecovered = this.options.health
            player.health += this.options.health
          }
          return [`You used ${this.name} and recovered ${player.health - healthBefore} health!`, true]
        }
      }else {
        return ['You are already at full health!', false]
      }
    }
  }
}

module.exports = Item
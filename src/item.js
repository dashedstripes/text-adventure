class Item {
  constructor(name, options) {
    this.name = name
    this.options = options || {}
  }

  use(player) {
    if(player != null) {
      if(player.health < 100) {
        if(this.options.health != null) {
          player.health += this.options.health
          console.log(`You used ${this.name} and gained ${this.options.health} health!`)
          return true
        }
      }else {
        console.log('You are already at full health!')
        return false
      }
    }
  }
}

module.exports = Item
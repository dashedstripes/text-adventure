function Player(name, options) {
  this.name = name
  this.health = options.health
  this.strength = options.strength

  this.stats = () => {
    console.log(`
    Your stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }
}

module.exports = Player
function Enemy(name, options) {
  this.name = name
  this.health = 100 || options.health
  this.strength = 10 || options.strength

  this.stats = () => {
    console.log(`
    ${this.name} stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }
}

module.exports = Enemy
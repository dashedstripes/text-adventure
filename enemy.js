function Enemy(name, options) {
  this.name = name
  this.health = 100 || options.health
  this.strength = 10 || options.strength

  return {
    name: this.name,
    health: this.health,
    strength: this.strength
  }
}

module.exports = Enemy
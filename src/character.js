class Character {
  constructor(name, options) {
    this.name = name

    if(options != null) {
      this.health = (options.health != undefined) ? options.health : 100
      this.strength = (options.strength != undefined) ? options.strength : 10
    }else {
      this.health = 100
      this.strength = 10
    }
  }
  
  stats() {
    console.log(`
    ${this.name} stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }

}

module.exports = Character


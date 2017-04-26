class NPC {
  constructor() {
    this.characters = [
      {
        name: 'Krumuahan Blackdust',
        type: 'Dwarf'
      },
      {
        name: 'Shaaedan Bladeshadow',
        type: 'Night elf'
      }
    ]
  }

  event() {
    let character = this.getCharacter()
    console.log(`You are greeted by ${character.name} the ${character.type}!`)
  }

  getCharacter() {
    return this.characters[Math.floor(Math.random() * this.characters.length)]
  }
}

module.exports = NPC
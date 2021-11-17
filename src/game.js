const Map = require('./map')
const Player = require('./player')
const Story = require('./story')
const Text = require('./text')
const Console = require('./console')

class Game {

  constructor() {
    this.running = false
    this.isCombat = false

    this.console = new Console()

    this.story = new Story()
    this.map = new Map()
    this.currentLocation = this.map.getHome()
    
    this.player = new Player('Icocos')
    this.currentEnemy = {}
  }

  start() {
    this.console.log(`
    You are ${this.player.name}.
    You begin in your home town, ${this.currentLocation.name}...
    `);

    this.running = true
  }

  handleEvent(input) {
    if(input == 'q' || input == 'quit') {
      this.running = false
    }else {
      if(this.isCombat) {
        this.parseCombatInput(input)
      }else {
        this.parseInput(input)
      }
    }

    if(this.running === false) {
      this.console.log('Game over.')
    }
  }

  parseInput(i) {
    let input = i.toLowerCase().split('')

    let inputMap = {
      h: () => this.showHelp(),
      l: () => this.getLocation(),
      s: () => this.player.stats.bind(this.player)(),
      m: () => this.map.showMap(this.currentLocation),
      e: () => this.story.newEvent(this.currentLocation, this),
      i: () => this.player.inventory.getItems(input),
      t: () => this.move(input),
    }

    if(typeof inputMap[input[0]] == 'function') {
      this.console.log(inputMap[input[0]]());
    }else {
      this.console.log('Command not found.')
    }

  }
  
  parseCombatInput(input) {
    input = input.toLowerCase();
    let inputMap = {
      h: () => this.showHelp(),
      r: () => this.setCombat(false),
      s: () => this.getCombatStats(),
      a: () => this.player.attack(this.currentEnemy, this),
      i: () => this.player.inventory.getItems(input),
    }

    if(typeof inputMap[input[0]] == 'function') {
      this.console.log(inputMap[input[0]]());
    }else {
      this.console.log('You are in combat, some commands will not work until you run away.')
    }
  }

  move(input) {

    let direction = ''

    if(input.length == 2) {

      if(input[1] != null) {
        if(input[1] == 'n') { direction = 'north' }
        if(input[1] == 's') { direction = 'south' }
        if(input[1] == 'e') { direction = 'east' }
        if(input[1] == 'w') { direction = 'west' }
      }

      let checker = {}
      if(direction == 'north') checker = this.currentLocation.getNorth
      if(direction == 'south') checker = this.currentLocation.getSouth
      if(direction == 'east') checker = this.currentLocation.getEast
      if(direction == 'west') checker = this.currentLocation.getWest
      
      if(typeof checker == 'function') {
        if(checker() != null) {
          this.currentLocation = checker()
          return `You move ${direction} to ${this.currentLocation.name}...`
        }else {
          return `There is nothing to the ${direction}.`
        }
      }else {
        return 'Invalid direction!'
      }
    }

  }

  getLocation() {
    return `${this.currentLocation.name}
    ${this.currentLocation.description}`
  }

  showHelp() {
    if(!this.isCombat) {
      return Text.HELP_TEXT
    } else {
      return Text.COMBAT_HELP_TEXT
    }
  }

  setCombat(isCombat) {
    this.isCombat = isCombat
    if(this.isCombat == false) {
      return 'You ran away...'
    }
  }

  getCombatStats() {
    return `
    ${this.currentEnemy.stats()},
    ${this.player.stats()}
    `
  }

}

module.exports = Game
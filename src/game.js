let readlineSync = require('readline-sync')
let Map = require('./map')
let map = new Map
let Player = require('./player')
let Story = require('./story')
let Text = require('./text')

class Game {

  constructor() {
    this.running = false
    this.isCombat = false

    this.story = new Story()
    this.map = map
    this.currentLocation = map.getHome()
    
    this.player = new Player('Icocos')
    this.currentEnemy = {}
  }

  start() {
    console.log(`
      You are ${this.player.name}, TODO: add some back story.
      
      You begin in your home town, ${this.currentLocation.name}...
    `)

    this.running = true

    while(this.running) {
      let input = readlineSync.question('$: ')
      if(input == 'q' || input == 'quit') {
        this.running = false
      }else {
        if(this.isCombat) {
          this.parseCombatInput(input)
        }else {
          this.parseInput(input)
        }
      }
    }

    console.log('Game over.')
  }

  parseInput(i) {
    let input = i.split('')

    let inputMap = {
      h: this.showHelp(),
      l: this.getLocation(),
      s: this.player.stats.bind(this.player),
      m: this.map.showMap(this.currentLocation),
      e: this.story.newEvent(this.currentLocation, this),
      i: this.player.inventory.getItems(input),
      t: this.move(input),
    }

    if(typeof inputMap[input[0]] == 'function') {
      inputMap[input[0]]()
    }else {
      console.log('Command not found.')
    }

  }
  
  parseCombatInput(input) {
    let inputMap = {
      h: this.showHelp(),
      r: this.setCombat(false),
      s: this.getCombatStats(),
      a: this.player.attack(this.currentEnemy, this),
      i: this.player.inventory.getItems(input),
    }

    if(typeof inputMap[input[0]] == 'function') {
      inputMap[input[0]]()
    }else {
      console.log('You are in combat, some commands will not work until you run away.')
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

      return () => {
        let checker = {}
        if(direction == 'north') checker = this.currentLocation.getNorth
        if(direction == 'south') checker = this.currentLocation.getSouth
        if(direction == 'east') checker = this.currentLocation.getEast
        if(direction == 'west') checker = this.currentLocation.getWest
        
        if(typeof checker == 'function') {
          if(checker() != null) {
            this.currentLocation = checker()
            console.log(`You move ${direction} to ${this.currentLocation.name}...`)
          }else {
            console.log(`There is nothing to the ${direction}.`)
          }
        }else {
          console.log('Invalid direction!')
        }
      }
    }

  }

  getLocation() {
    return () => {
      console.log(
      `
      ${this.currentLocation.name}
      ${this.currentLocation.description}
      `)
    }
  }

  showHelp() {
    return () => {
      (!this.isCombat) ? console.log(Text.HELP_TEXT) : console.log(Text.COMBAT_HELP_TEXT)
    }
  }

  setCombat(isCombat) {
    return () => {
      this.isCombat = isCombat
      if(this.isCombat == false) {
        console.log('You ran away...')
      }
    }
  }

  getCombatStats() {
    return () => {
      this.currentEnemy.stats(),
      this.player.stats()
    }
  }

}

module.exports = Game
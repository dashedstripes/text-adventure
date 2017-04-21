let readlineSync = require('readline-sync')
let Map = require('./map')
let map = new Map
let Player = require('./player')
let Story = require('./story')
let Text = require('./text')

function Game() {

  this.running = false
  this.story = new Story()
  this.map = map
  this.currentLocation = map.getHome()
  this.player = new Player('Adam', {
    health: 100,
    strength: 100
  })

  this.start = () => {
    console.log(`
      You begin in your home town, ${this.currentLocation.name}...
    `)

    running = true

    while(running) {
      let input = readlineSync.question('$: ')
      if(input == 'q' || input == 'quit') {
        running = false
      }else {
        this.parseInput(input)
      }
    }

    console.log('Game over.')
  }

  this.parseInput = (input) => {
    let inputMap = {
      h: this.showHelp,
      l: this.getLocation,
      s: this.player.stats,
      m: this.map.showMap(this.currentLocation),
      e: this.story.newEvent(this.currentLocation),
      mn: this.move('north'),
      ms: this.move('south'),
      me: this.move('east'),
      mw: this.move('west')
    }

    if(typeof inputMap[input] == 'function') {
      inputMap[input]()
    }else {
      console.log('Command not found.')
    }
  }

  this.move = (direction) => {
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
        console.log(new Error('Error parsing movement direction!'))
      }
    }
  }

  this.getLocation = () => {
    console.log(
    `
    ${this.currentLocation.name}
    ${this.currentLocation.description}
    `)
  }

  this.showHelp = () => {
    console.log(Text.HELP_TEXT)
  }

}

module.exports = Game
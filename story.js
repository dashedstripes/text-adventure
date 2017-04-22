let Enemy = require('./enemy')

function Story() {

  let goblin = new Enemy('Goblin')
  let snake = new Enemy('Snake', {
    health: 50
  })

  let enemies = [goblin, snake]

  this.newEvent = (location, game) => {
    return () => {
      // random chance of something happening
      let chance = Math.floor(Math.random() * 100)
      
      if(chance > 60) {
        // an attack happens
        let currentEnemy = enemies[Math.floor(Math.random() * (enemies.length))]
        console.log('***** COMBAT MODE *****')
        console.log(`A wild ${currentEnemy.name} attacks!`)
        game.currentEnemy = currentEnemy
        game.isCombat = true
      }else{
        // story arch
        console.log(`A new event taking place at ${location.name}!`)
      }
    }
  }
}

module.exports = Story
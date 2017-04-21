let Enemy = require('./enemy')

function Story() {

  let goblin = new Enemy('Goblin')
  let snake = new Enemy('Snake')

  let enemies = [goblin, snake]

  this.newEvent = (location, game) => {
    return () => {
      // random chance of something happening
      let chance = Math.floor(Math.random() * 100)
      
      if(chance > 0) {
        // an attack happens
        game.setCombat(true)
        let currentEnemy = enemies[Math.floor(Math.random() * (enemies.length))]
        console.log('****** COMBAT ******')
        console.log(`A wild ${currentEnemy.name} attacks!`)
      }else{
        // story arch
        console.log(`A new event taking place at ${location.name}!`)
      }
    }
  }
}

module.exports = Story
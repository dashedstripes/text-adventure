function Story() {

  this.newEvent = (location) => {
    return () => {
      // random chance of something happening
      let chance = Math.floor(Math.random() * 100)
      
      if(chance > 60) {
        // an attack happens
        console.log(`An attack is about to happen in ${location.name}`)
      }else{
        // story arch
        console.log(`A new event taking place at ${location.name}!`)
      }
    }
  }
}

module.exports = Story
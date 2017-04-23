function Location(name, description) {
  this.name = name || 'Location'

  this.description = description || 'A new location'

  let north = null
  let south = null
  let east = null
  let west = null

  this.getNorth = () => north
  this.getSouth = () => south
  this.getEast = () => east
  this.getWest = () => west

  this.setNorth = (location) => {
    north = location
    if(location.getSouth() == null) { 
      location.setSouth(this)
    }
  }

  this.setSouth = (location) => {
    south = location
    if(location.getNorth() == null) {
      location.setNorth(this)
    }
  }

  this.setEast = (location) => {
    east = location
    if(location.getWest() == null) {
      location.setWest(this)
    }
  }

  this.setWest = (location) => {
    west = location
    if(location.getEast() == null) {
      location.setEast(this)
    }
  }

}

module.exports = Location
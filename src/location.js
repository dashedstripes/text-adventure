class Location {
  constructor(name, description) {
    this.name = name || 'Location'
    this.description = description || 'A new location'

    this.north = null
    this.south = null
    this.east = null
    this.west = null

    this.getNorth = () => this.north
    this.getSouth = () => this.south
    this.getEast = () => this.east
    this.getWest = () => this.west
  }

  setNorth(location) {
    this.north = location
    if(location.getSouth() == null) { 
      location.setSouth(this)
    }
  }

  setSouth(location) {
    this.south = location
    if(location.getNorth() == null) {
      location.setNorth(this)
    }
  }

  setEast(location) {
    this.east = location
    if(location.getWest() == null) {
      location.setWest(this)
    }
  }

  setWest(location) {
    this.west = location
    if(location.getEast() == null) {
      location.setEast(this)
    }
  }

}

module.exports = Location
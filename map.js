let Location = require('./location')

function Map() {

  let home = new Location('Wolfpine', 'Your home town.')
  let forest = new Location('Forest')
  let city = new Location('City')
  let city2 = new Location('City 2')
  let city3 = new Location('City 3')
  let town = new Location('Town')

  home.setNorth(forest)
  home.setSouth(city)
  home.setEast(town)
  home.setWest(city3)

  forest.setNorth(city2)
  city3.setNorth(town)

  this.getHome = () => home

  this.showMap = (currentLocation) => {
    return () => {
      let map = this.createMap(currentLocation)
    }
  }

  this.createMap = (node) => {
    let top = ''
    let center = ''
    let bottom = ''
    let spacing = Array(20).join(' ')
    let divider = '----'

    if(node.getWest() != null) {
      center += node.getWest().name
      center += spacing
    }else {
      center += divider
      center += spacing
    }

    center += '*' + node.name + '*'

    if(node.getEast() != null) {
      center += spacing
      center += node.getEast().name
    }else {
      center += spacing
      center += divider
    }

    if(node.getNorth() != null) {
      if(node.getWest() != null) {
        top += (Array(node.getWest().name.length + 1).join(' ') + spacing)
      }else {
        top += (Array(divider.length + 1).join(' ') + spacing)
      }
      top += node.getNorth().name
    }else {
      if(node.getWest() != null) {
        top += (Array(node.getWest().name.length + 1).join(' ') + spacing)
      }else {
        top += (Array(divider.length + 1).join(' ') + spacing)
      }
      top += divider
    }

    if(node.getSouth() != null) {
      if(node.getWest() != null) {
        bottom += (Array(node.getWest().name.length + 1).join(' ') + spacing)
      }else {
        bottom += (Array(divider.length + 1).join(' ') + spacing)
      }
      bottom += node.getSouth().name
    }else {
      if(node.getWest() != null) {
        bottom += (Array(node.getWest().name.length + 1).join(' ') + spacing)
      }else {
        bottom += (Array(divider.length + 1).join(' ') + spacing)
      }
      bottom += divider
    }

    console.log('')
    console.log(top)
    console.log(center)
    console.log(bottom)
    console.log('')

  }

}

module.exports = Map

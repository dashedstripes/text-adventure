let Item = require('./item')

class Inventory {
  constructor() {
    this.items = [
      new Item('Health Tonic', { health: 10 }),
      new Item('Health Tonic', { health: 10 })
    ]
  }

  getItems() {
    let selected = 0
    let itemDisplay = ''

    if(this.items.length > 0) {
      this.items.map((item, index) => {
        (index != this.items.length - 1) ? itemDisplay += `${index}: ${item.name}\n` : itemDisplay += `${index}: ${item.name}`
      })
      console.log(itemDisplay)
    }else {
      console.log('There is nothing in your inventory.')
    }
  }

  useItem(index) {
    console.log('Going to use', this.items[index].name)
  }

  addToInventory(item) {
    this.items.push(item)
  }
}

module.exports = Inventory
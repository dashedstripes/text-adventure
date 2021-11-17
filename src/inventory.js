let Item = require('./item')

class Inventory {
  constructor(player) {
    this.player = player
    this.items = []
  }

  getItems(commands) {
    if(commands.length == 1) {
      let selected = 0
      let itemDisplay = ''

      if(this.items.length > 0) {
        this.items.map((item, index) => {
          ;(index != this.items.length - 1) ? itemDisplay += `${index}: ${item.name}\n` : itemDisplay += `${index}: ${item.name}`
        })
        return itemDisplay
      }else {
        return 'There is nothing in your inventory.'
      }
    }else {
      // use item at index
      if(commands[1] != null) {
        return this.useItem(commands[1])
      }
    }
  }

  useItem(index) {
    if(this.items[index] != null) {
      const useItem = this.items[index].use(this.player);
      if(useItem[1]) {
        this.removeFromInventory(index)
      }
      return test[0];
    }else {
      return 'No item found.'
    }
  }

  addToInventory(item) {
    this.items.push(item)
  }

  removeFromInventory(index) {
    if(index >= 0) {
      this.items.splice(index, 1)
    }
  }
}

module.exports = Inventory
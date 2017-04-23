class Inventory {
  constructor() {
    this.items = []
  }

  getItems() {
    return () => {
      if(this.items.length > 0) {
        this.items.map((item) => {
          console.log(item.name)
        })
      }else {
        console.log('There is nothing in your inventory.')
      }
    }
  }

  addToInventory(item) {
    this.items.push(item)
  }
}

module.exports = Inventory
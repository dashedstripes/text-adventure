class Console {
  constructor() {
    this.output = document.getElementById('output')
  }

  log(text) {
    text = text.split('\n')
    text.forEach(line => {
      this.output.insertAdjacentHTML('afterbegin',`<p class="message">${line}</p>`)
    })
  }
}

module.exports = Console
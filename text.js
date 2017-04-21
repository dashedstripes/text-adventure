let fs = require('fs')

let HELP_TEXT = fs.readFileSync('./text/help.txt', 'utf8')

module.exports = {
  HELP_TEXT
}
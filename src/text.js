let fs = require('fs')

let HELP_TEXT = fs.readFileSync('./src/text/help.txt', 'utf8')
let COMBAT_HELP_TEXT = fs.readFileSync('./src/text/combat_help.txt', 'utf8')

module.exports = {
  HELP_TEXT,
  COMBAT_HELP_TEXT
}
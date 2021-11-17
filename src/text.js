let HELP_TEXT = `
---- HELP ----

Key commands:

h: Help
q: Quit
e: Explore
m: Map
l: Current location
s: Stats
i: Show inventory, add a number after i to use the item. i.e i0 to use the first item in inventory.

Movement:

tn: Travel north
ts: Travel south
te: Travel east
tw: Travel west

---- ENDHELP ----`
let COMBAT_HELP_TEXT = `Key commands:

h: Help
q: Quit
s: Show both player and enemy stats
i: Show inventory, add a number after i to use the item. i.e i0 to use the first item in inventory.

Combat:

a: Attack
r: Run away`

module.exports = {
  HELP_TEXT,
  COMBAT_HELP_TEXT
}
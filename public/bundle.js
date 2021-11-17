(()=>{var t={136:t=>{t.exports=class{constructor(t,e){this.name=t,null!=e?(this.health=null!=e.health?e.health:100,this.strength=null!=e.strength?e.strength:10):(this.health=100,this.strength=10)}stats(){console.log(`\n    ${this.name} stats\n    ----------\n    \n    Health: ${this.health}\n    Strength: ${this.strength}\n    `)}}},520:t=>{t.exports=class{constructor(){this.output=document.getElementById("output")}log(t){this.output.innerHTML+=`<p class="message">${t}</p>`}}},657:(t,e,s)=>{let o=s(136);t.exports=class extends o{attack(t,e){if(Math.floor(3*Math.random())>=1){let s=Math.floor(Math.random()*this.strength)+1;t.health-=s,10==s&&console.log(`${this.name} threw a critical hit!`),t.health<=0?(console.log(`${t.name} died!`),e.isCombat=!1):console.log(`${this.name} hit ${t.name}, ${t.name} now has ${t.health} health points!`)}else console.log(`${this.name} attack missed!`)}}},417:(t,e,s)=>{s(770),s(507),s(783);const o=s(532),n=s(520);t.exports=class{constructor(){this.running=!1,this.isCombat=!1,this.console=new n}start(){}parseInput(t){let e=t.split(""),s={h:this.showHelp(),l:this.getLocation(),s:this.player.stats.bind(this.player),m:this.map.showMap(this.currentLocation),e:this.story.newEvent(this.currentLocation,this),i:this.player.inventory.getItems(e),t:this.move(e)};"function"==typeof s[e[0]]?s[e[0]]():this.console.log("Command not found.")}parseCombatInput(t){let e={h:this.showHelp(),r:this.setCombat(!1),s:this.getCombatStats(),a:this.player.attack(this.currentEnemy,this),i:this.player.inventory.getItems(t)};"function"==typeof e[t[0]]?e[t[0]]():this.console.log("You are in combat, some commands will not work until you run away.")}move(t){let e="";if(2==t.length)return null!=t[1]&&("n"==t[1]&&(e="north"),"s"==t[1]&&(e="south"),"e"==t[1]&&(e="east"),"w"==t[1]&&(e="west")),()=>{let t={};"north"==e&&(t=this.currentLocation.getNorth),"south"==e&&(t=this.currentLocation.getSouth),"east"==e&&(t=this.currentLocation.getEast),"west"==e&&(t=this.currentLocation.getWest),"function"==typeof t?null!=t()?(this.currentLocation=t(),this.console.log(`You move ${e} to ${this.currentLocation.name}...`)):this.console.log(`There is nothing to the ${e}.`):this.console.log("Invalid direction!")}}getLocation(){return()=>{this.console.log(`\n      ${this.currentLocation.name}\n      ${this.currentLocation.description}\n      `)}}showHelp(){return()=>{this.isCombat?this.console.log(o.COMBAT_HELP_TEXT):this.console.log(o.HELP_TEXT)}}setCombat(t){return()=>{this.isCombat=t,0==this.isCombat&&this.console.log("You ran away...")}}getCombatStats(){return()=>{this.currentEnemy.stats(),this.player.stats()}}}},441:(t,e,s)=>{s(87),t.exports=class{constructor(t){this.player=t,this.items=[]}getItems(t){return 1==t.length?()=>{let t="";this.items.length>0?(this.items.map(((e,s)=>{s!=this.items.length-1?t+=`${s}: ${e.name}\n`:t+=`${s}: ${e.name}`})),console.log(t)):console.log("There is nothing in your inventory.")}:null!=t[1]?()=>{this.useItem(t[1])}:void 0}useItem(t){null!=this.items[t]?this.items[t].use(this.player)&&this.removeFromInventory(t):console.log("No item found.")}addToInventory(t){this.items.push(t)}removeFromInventory(t){t>=0&&this.items.splice(t,1)}}},87:t=>{t.exports=class{constructor(t,e){this.name=t,this.options=e||{}}use(t){if(null!=t){if(!(t.health<100))return console.log("You are already at full health!"),!1;if(null!=this.options.health){let e=this.options.health,s=t.health,o=t.health+this.options.health,n=0;if(o>100){let s=e+(100-o);n=s,t.health+=s}else n=this.options.health,t.health+=this.options.health;return console.log(`You used ${this.name} and recovered ${t.health-s} health!`),!0}}}}},154:t=>{t.exports=class{constructor(t,e,s){this.name=t||"Location",this.description=e||"A new location",this.hasNPC=s||!1,this.north=null,this.south=null,this.east=null,this.west=null,this.getNorth=()=>this.north,this.getSouth=()=>this.south,this.getEast=()=>this.east,this.getWest=()=>this.west}setNorth(t){this.north=t,null==t.getSouth()&&t.setSouth(this)}setSouth(t){this.south=t,null==t.getNorth()&&t.setNorth(this)}setEast(t){this.east=t,null==t.getWest()&&t.setWest(this)}setWest(t){this.west=t,null==t.getEast()&&t.setEast(this)}}},770:(t,e,s)=>{let o=s(154);t.exports=class{constructor(){this.home=new o("Wolfpine","Your home town.",!0);let t=new o("Forest",null,!1),e=new o("City",null,!0),s=new o("City 2",null,!0),n=new o("City 3",null,!0),h=new o("Town",null,!0);this.home.setNorth(t),this.home.setSouth(e),this.home.setEast(h),this.home.setWest(n),t.setNorth(s),n.setNorth(h)}getHome(){return this.home}showMap(t){return()=>{this.createMap(t)}}createMap(t){let e,s,o;e=s=o="";let n=Array(20).join(" "),h="----";function i(){return null!=t.getWest()?Array(t.getWest().name.length+1).join(" ")+n:Array(h.length+1).join(" ")+n}null!=t.getWest()?s+=t.getWest().name:s+=h,s+=`${n}*${t.name}*${n}`,null!=t.getEast()?s+=t.getEast().name:s+=h,null!=t.getNorth()?(e+=i(),e+=t.getNorth().name):(e+=i(),e+=h),null!=t.getSouth()?(o+=i(),o+=t.getSouth().name):(o+=i(),o+=h),console.log(`\n    ${e}\n    ${s}\n    ${o}\n    `)}}},548:t=>{t.exports=class{constructor(){this.characters=[{name:"Krumuahan Blackdust",type:"Dwarf"},{name:"Shaaedan Bladeshadow",type:"Night elf"}]}event(t){let e=this.getCharacter();t.log(`You are greeted by ${e.name} the ${e.type}!`)}getCharacter(){return this.characters[Math.floor(Math.random()*this.characters.length)]}}},507:(t,e,s)=>{let o=s(136),n=s(441);t.exports=class extends o{constructor(t,e){super(t,e),this.inventory=new n(this)}attack(t,e){return()=>{if(Math.floor(3*Math.random())>=1){let s=Math.floor(Math.random()*this.strength)+1;t.health-=s,10==s&&this.console.log("Critical hit!"),t.health<=0?(this.console.log(`The ${t.name} died!`),e.isCombat=!1):this.console.log(`You hit the ${t.name}, it now has ${t.health} health points!`)}else this.console.log("Your attack missed!");t.health>0&&t.attack(this,e)}}}},783:(t,e,s)=>{let o=s(657),n=s(87),h=s(548);t.exports=class{constructor(){let t=new o("Goblin",{health:50}),e=new o("Snake",{health:30});this.enemies=[t,e],this.npc=new h}newEvent(t,e){return()=>{Math.floor(100*Math.random())>60?this.combatEvent(e):this.storyEvent(t,e)}}combatEvent(t){let e=this.enemies[Math.floor(Math.random()*this.enemies.length)];this.console.log("***** COMBAT MODE *****"),this.console.log(`A wild ${e.name} attacks!`),t.currentEnemy=e,t.isCombat=!0}storyEvent(t,e){Math.floor(100*Math.random())>60?this.itemEvent(t,e):t.hasNPC?this.npc.event(this.console,t,e):(this.console.log(`You notice a traveller ahead of you in ${t.name} has dropped something, you decide to pick it up.`),this.itemEvent(t,e))}itemEvent(t,e){let s=[new n("Health Tonic",{health:10})],o=s[Math.floor(Math.random()*s.length)];this.console.log(`You found a ${o.name}`),e.player.inventory.addToInventory(o)}}},532:t=>{let e=```

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

```,s=```

Key commands:

h: Help
q: Quit
s: Show both player and enemy stats
i: Show inventory, add a number after i to use the item. i.e i0 to use the first item in inventory.

Combat:

a: Attack
r: Run away

```;t.exports={HELP_TEXT:e,COMBAT_HELP_TEXT:s}}},e={};(new(function s(o){var n=e[o];if(void 0!==n)return n.exports;var h=e[o]={exports:{}};return t[o](h,h.exports,s),h.exports}(417))).start()})();
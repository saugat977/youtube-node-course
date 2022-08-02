

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

const {john,name2} = require('./firstModule')
const sayHi = require('./secondModule')
console.log(names);
require('./mind-grenade')
sayHi('norah')
sayHi(john)
sayHi(name2)
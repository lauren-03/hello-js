
//console.log('hello, world!');
//NODE PACKAGE MANAGER
/*A buitl i tool for installing, managing and sharing code packages. its like playstore/applestore for JS
core commands
npm init -y #sets up project
npm install express #intalls locally (adds to node_modules/)
npm install -g nodemon #Global install (usable anywhere)
npm list #shows installed packages
UNDERSTADING MODULES
Break code into reusable chunks- avoids "spaghetti code"
nodes secret sauce: CommonJS system(require/export)
TYPES OF MODULES:
built-in: no install needed (e.g fs for files, path for URLs)
user-defined: your own files
Third-party: from NPM(e.g Express)

*/

//USER-DEFINED MODULE
//math.js(export function)
//app.js(imports & uses)
/*const math = require("./math")  //relative path
console.log(math.add(6, 7)); //12
console.log(math.subtract(10, 3));*/
//OR

/*import {add, subtract} from "./math.js";
console.log(subtract(10, 2));.....for this to work, in the pckage.json
 below version write "type" : "module",*/

//we run in the index.js because its our entry point
//module enforces separation of concerns- math logic stays in one file




// How NodeJS differs from Vanilla JS
// 1) Node runs on a server , not in a browser (backend, not frontend)
// 2) The console is the terminal window
// 3) You can also run commands in the file in the terminal by running node fileName in the terminal
console.log("Hello, World!");
const { log } = require('console');
// 3) There is a global object instead of window object
// console.log(global);
// 4) Has common core modules that we will explore
// 5) CommonJS modules instead of ES6 modules ie, require below is used in importing os and path
// 6) Missing some JS APIs like fetch

const os = require('os')
const path = require('path')
const math = require('./math')
const {subtract, multiply, divide, add} = require('./math')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

// __filename: A built-in Node.js variable that contains the absolute path of the current file (including the file name).

console.log(path.dirname(__filename));
// path.dirname(__filename): Extracts the directory path from the full file path.
// Purpose: This line prints the directory where the current file is located.
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
// This command gives you everything above at once

console.log(math.add(3,9));
console.log(subtract(9, 6));

// To run it in the terminal, type node server ie, server being the file name without the extension


// NB:
//    IN ORDER TO RUN THIS FILE AND WORK, ENSURE IT IS NOT IN A FOLDER BUT AS A STAND ALONE FILE
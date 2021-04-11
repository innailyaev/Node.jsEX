//q1: What is the difference between import and require?
//with require you can't selectively load only the pieces you need and It can be called at any time and place in the program 
//but with imports, you can selectively load only the pieces you need and It can’t be called conditionally, it always run in the beginning of the file.

//q2 : How can you enable using the import syntax using node js, Give 2 node.js environment variables that are not available when using the import synta.
// 1- process.env.NODE_ENV , 2-process.env.BABEL_ENV

//q3: Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax

const {add , sub , print } = require('./utils.js');
const sumAdd = add(2,4);
const sumSub = sub(2,4);
console.log(sumAdd,sumSub, print());

// const sub = require('./utils.js');
// const print = require('./utils.js');





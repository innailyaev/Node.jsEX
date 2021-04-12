const yargs = require('yargs');
const calc = require("./calc.js");


// add 
yargs.command({
    command: 'add',
    describe: 'Adding two numbers',
    builder:{
        a:{
            type:'integer',
            demandOptions:true
        },
        b:{
            type:'integer',
            demandOptions:true
        },
    },
    handler(argv){
        console.log(argv.a + argv.b);
    }
})

//substract
yargs.command({
    command: 'sub',
    describe: 'Substract two numbers',
    builder:{
        a:{
            type:'integer',
            demandOptions:true
        },
        b:{
            type:'integer',
            demandOptions:true
        },
    },
    handler(argv){
        console.log(argv.a - argv.b);
    }
})

//multiply
yargs.command({
    command: 'multi',
    describe: 'multiply two numbers',
    builder:{
        a:{
            type:'integer',
            demandOptions:true
        },
        b:{
            type:'integer',
            demandOptions:true
        },
    },
    handler(argv){
        console.log(argv.a * argv.b);
    }
})

//pow
yargs.command({
    command: 'pow',
    describe: 'pow',
    builder:{
        a:{
            type:'integer',
            demandOptions:true
        },
    },
    handler(argv){
        console.log(Math.pow(argv.a,2));
    }
})

yargs.parse();
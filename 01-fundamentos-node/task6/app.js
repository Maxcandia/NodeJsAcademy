const crearArchivo = require('./newTable')
const colors = require('colors');
const yargs = require('yargs');

let argv = yargs.argv;
let table1 = argv.base;


crearArchivo(table1)
    .then(() => {
        console.log('File written successfull');

    })
    .catch((error) => {
        console.log(error);
    });


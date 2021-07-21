const crearArchivo = require('./newTable')
const colors = require('colors');
const { boolean } = require('yargs');

const argv = require('yargs')
        .option('l', {
            alias: 'list',
            type: boolean,
            demandOption: false
        })
        .check((argv, options) => {
            let base = argv.base;
            if(isNaN(base)) throw Error ('El valor ingresado debe ser un numero');
            else if((base < 1 || base > 20)) throw Error ('Debes colocar un valor de base entre 1 y 20');
            else return true;
        }).argv;


let base = argv.base;
let list = argv.l;

crearArchivo(base, list)
.then(message => console.log(message))
.catch(error => console.log(error));



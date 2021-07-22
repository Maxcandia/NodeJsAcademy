
const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })

        .option('l', {
            alias: 'list',
            type: 'boolean',
            demandOption: false,
            describe: 'Muestra la tabla en consola'
        })
        .check((argv, options) => {
            let base = argv.b;
            if(isNaN(base)) throw Error ('El valor ingresado debe ser un numero');
            else if((base < 1 || base > 20)) throw Error ('Debes colocar un valor de base entre 1 y 20');
            else return true;
        }).argv;

module.exports = argv       
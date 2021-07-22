const crearArchivo = require('./newTable')
const colors = require('colors');
const { boolean } = require('yargs');
const yargs = require('./Config/yargs')

let base = yargs.b;
let list = yargs.l;

crearArchivo(base, list)
.then(message => console.log(message))
.catch(error => console.log(error));



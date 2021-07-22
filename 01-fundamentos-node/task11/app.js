const crearArchivo = require('./newTable');
const yargs = require('./Config/yargs');

let base = yargs.b;
let list = yargs.l;

crearArchivo(base, list)
    .then(message => console.log(message))
    .catch(error => console.log(error));



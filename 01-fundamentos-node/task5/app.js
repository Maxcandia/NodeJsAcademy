const crearArchivo = require('./newTable')
const colors = require('colors');

let table = process.argv[2];
let table1 = table.split('=')[1];


crearArchivo(table1)
    .then(() => {
        console.log('File written successfull');

    })
    .catch((error) => {
        console.log(error);
    });


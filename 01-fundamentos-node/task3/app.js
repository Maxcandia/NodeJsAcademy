const crearArchivo = require('./newTable')

crearArchivo()
    .then(() => {
        console.log('File written successfull');
    })
    .catch((error) => {
        console.log(error);
    });

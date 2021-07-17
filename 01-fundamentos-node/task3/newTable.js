//Tabla de multiplicar en consola
const fs = require('fs');

function crearArchivo(){ 
    const table = 5;
    let result = '';
    for (let i=1; i<=10; i++){
        result += `${table} x ${i} = ${table * i} \n`;    
    }   

    const filName = 'Tabla -' + table+'.txt';
    return new Promise((resolve, reject) => {
        fs.writeFile(filName, result, error => {
            if(error)
                reject(error);
            else
                resolve();    
        });
    });
}

module.exports = crearArchivo
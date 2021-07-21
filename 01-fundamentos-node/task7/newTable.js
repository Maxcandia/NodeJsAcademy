//Tabla de multiplicar en consola
const fs = require('fs');

const crearArchivo = (base, list) =>{ 
    return new Promise((resolve, reject) => {
        
    let result = '';
    for (let i=1; i<=10; i++){
        result += `${base} x ${i} = ${base * i} \n`;    
    }
    if(list) {
        console.log(`TABLA DE MULTIPLICAR DEL ${base}`.bgBlue.bold)    
        console.log(result.random);
    }
    const filName = `Tabla -${base}.txt`;
        fs.writeFile(filName, result,"utf-8", (error) => {
            if(error)
                reject('the file has an error'.red);
            else
                resolve('file created successfully'.green);    
        });
    });
}

module.exports = crearArchivo
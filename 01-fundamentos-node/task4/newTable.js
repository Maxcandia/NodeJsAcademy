//Tabla de multiplicar en consola
const fs = require('fs');

const crearArchivo = (table) =>{ 
    return new Promise((resolve, reject) => {
        
    let result = '';
    for (let i=1; i<=10; i++){
        result += `${table} x ${i} = ${table * i} \n`;    
    }   
    console.log(result);
  
    const filName = `Tabla -${table}.txt`;
        fs.writeFile(filName, result,"utf-8", (error) => {
            if(error)
                reject('the file has an error');
            else
                resolve('file created successfully');    
        });
    });
}

module.exports = crearArchivo
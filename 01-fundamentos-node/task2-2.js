//Tabla de multiplicar en consola
const fs = require('fs');

const table = 5;
let result = '';
 
for (let i=1; i<=10; i++){
    result += `${table} x ${i} = ${table * i} \n`;    
}   

const filName = 'Tabla -' + table+'.txt';
fs.writeFile(filName, result, error => {
    if(error)
        console.log(error)
    else
        console.log('File written successfully');    
});
